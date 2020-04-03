// 树状的算法
export function getTrees (list, startId, parentKey) {
  const items = {}
  // 获取每个节点的直属子节点，*记住是直属，不是所有子节点
  for (let i = 0; i < list.length; i++) {
    const key = list[i][parentKey]
    if (items[key]) {
      items[key].push(list[i])
    } else {
      items[key] = []
      items[key].push(list[i])
    }
  }
  return formatTree(items, startId)
}
// 利用递归格式化每个节点
export function formatTree (items, startId) {
  const result = []
  if (!items[startId]) {
    return result
  }
  for (const t of items[startId]) {
    t.children = formatTree(items, t.id)
    result.push(t)
  }
  // console.log(result)
  return result
}
