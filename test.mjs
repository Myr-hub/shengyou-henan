import assert from 'node:assert/strict';
import {searchGames} from './search.mjs';
const games = [
  {id:'zhoukou',name:'周口麻将',region:'周口'},
  {id:'luyi',name:'鹿邑麻将',region:'周口'},
  {id:'zhengzhou',name:'郑州麻将',region:'郑州'},
  {id:'pdk',name:'经典跑得快',region:'大众'}
];
assert.equal(searchGames(games).length,4);
assert.deepEqual(searchGames(games,{keyword:' 麻将 '}).map(g=>g.id),['zhoukou','luyi','zhengzhou']);
assert.deepEqual(searchGames(games,{region:'周口'}).map(g=>g.id),['zhoukou','luyi']);
assert.deepEqual(searchGames(games,{keyword:'鹿邑',region:'周口'}).map(g=>g.id),['luyi']);
assert.deepEqual(searchGames(games,{keyword:'跑得快',region:'周口'}),[]);
assert.deepEqual(searchGames(games,{keyword:'不存在'}),[]);
assert.deepEqual(searchGames([]),[]);
assert.equal(searchGames(games,{keyword:'　',region:' '}).length,4);
assert.throws(()=>searchGames(games,{keyword:3}),TypeError);
assert.throws(()=>searchGames(games,{region:null}),TypeError);
const changed=searchGames(games);
changed[0].name='修改后的显示名称';
assert.equal(games[0].name,'周口麻将');
console.log('11 assertions passed');
