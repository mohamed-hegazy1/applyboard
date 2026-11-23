import {test} from 'node:test';import assert from 'node:assert/strict';import {samples,validate,restore,filterEntries,safeUrl} from './model.js';
test('required fields',()=>assert.match(validate({company:'',role:''}),/company/));
test('reject unsafe links',()=>assert.equal(safeUrl('javascript:alert(1)'),''));
test('valid sample entries',()=>samples.forEach(e=>assert.equal(validate(e),'')));
test('corrupt and wrong storage shape',()=>{assert.deepEqual(restore('bad'),[]);assert.deepEqual(restore('{}'),[]);});
test('deduplicate stored entries',()=>assert.equal(restore(JSON.stringify([samples[0],samples[0]])).length,1));
test('combined filters',()=>assert.equal(filterEntries(samples,'react','Saved').length,1));
