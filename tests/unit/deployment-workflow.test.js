import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const workflow = readFileSync(
  new URL('../../.github/workflows/ci-cd.yml', import.meta.url),
  'utf8'
);

test('Pages upload and both deployment attempts use an attempt-specific artifact', () => {
  assert.match(
    workflow,
    /PAGES_ARTIFACT_NAME: github-pages-\$\{\{ github\.run_id \}\}-\$\{\{ github\.run_attempt \}\}/
  );
  assert.match(workflow, /name: \$\{\{ env\.PAGES_ARTIFACT_NAME \}\}/);
  assert.equal(
    workflow.match(/artifact_name: \$\{\{ env\.PAGES_ARTIFACT_NAME \}\}/g)
      ?.length,
    2
  );
});

test('Pages deployment retries only before a URL is returned and preserves failures', () => {
  const retryCondition =
    "if: steps.deployment.outcome == 'failure' && steps.deployment.outputs.page_url == ''";
  assert.match(
    workflow,
    /id: deployment\n\s+uses: actions\/deploy-pages@v5\n\s+continue-on-error: true/
  );
  assert.equal(workflow.split(retryCondition).length - 1, 2);
  assert.match(workflow, /run: sleep 10/);
  assert.match(
    workflow,
    /id: deployment_retry\n\s+if: steps\.deployment\.outcome == 'failure' && steps\.deployment\.outputs\.page_url == ''\n\s+uses: actions\/deploy-pages@v5/
  );
  assert.match(
    workflow,
    /if: steps\.deployment\.outcome == 'failure' && steps\.deployment\.outputs\.page_url != ''\n\s+run: exit 1/
  );
  assert.match(
    workflow,
    /url: \$\{\{ steps\.deployment\.outputs\.page_url \|\| steps\.deployment_retry\.outputs\.page_url \}\}/
  );
});
