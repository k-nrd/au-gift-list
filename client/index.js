const axios = require('axios');
const args = require('yargs').argv
const niceList = require('../utils/nice-list.json');
const MerkleTree = require('../utils/merkle-tree')

const serverUrl = 'http://localhost:1225';

const giftTree = new MerkleTree(niceList)

async function main() {

  const me = args.name

  if (me == null) {
    console.log("Please pass a name using the '--name' flag.")
    console.log(`Example: \n\tnpm run client -- --name "Troy Weber"`)
    return
  }

  const myIdx = niceList.findIndex((elt) => elt === me)

  // TODO: how do we prove to the server we're on the nice list? 
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof: giftTree.getProof(myIdx),
    leaf: me
  });

  console.log({ gift });
}

main();
