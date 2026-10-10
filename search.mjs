// 独立教学示例，不是盛游原始工程。
export function searchGames(games, {keyword = '', region = ''} = {}) {
  if (typeof keyword !== 'string' || typeof region !== 'string') {
    throw new TypeError('关键词与地区必须是字符串');
  }
  const query = keyword.trim();
  const area = region.trim();
  return games
    .filter(game => (!query || game.name.includes(query)) &&
      (!area || game.region === area))
    .map(({id, name, region}) => ({id, name, region}));
}
