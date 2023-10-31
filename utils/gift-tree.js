const MerkleTree = require('./merkle-tree')
const niceList = require('./nice-list.json')

const giftTree = new MerkleTree(niceList)
const root = giftTree.getRoot()

console.group('Gift tree root:')
console.log(root)
console.groupEnd()
