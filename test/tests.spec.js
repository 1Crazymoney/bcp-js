const creatorTests = {
  text: 'Hello BCP',
  ipfs: 'QmZmqLskJmghru919cvU4qSy3L5vc1S2JdzsUXrM17ZqT9',
  ipfsURL: 'ipfs://QmTYqoPYf7DiVebTnvwwFdTgsYXg2RnuPrt8uddjfW2kHS',
  url: 'http://example.com/image.png',
  sip: 'sip:john@example.com',
  slp: 'simpleledger:qq2fg599ysqvfefr2ur0z34n2dk6f0aszg5pskpe06'
}

const parserTests = {
  text: '6a0442435000010201010948656c6c6f20424350',
  ipfs: '6a0442435000010401042e516d5a6d714c736b4a6d6768727539313963765534715379334c3576633153324a647a735558724d31375a715439',
  url: '6a0442435000010301031c687474703a2f2f6578616d706c652e636f6d2f696d6167652e706e67',
  ipfsURL: '6a04424350000105010335697066733a2f2f516d5459716f505966374469566562546e767777466454677359586732526e75507274387564646a6657326b4853',
  sip: '6a044243500001040103147369703a6a6f686e406578616d706c652e636f6d',
  slp: '6a0442435000010101053773696d706c656c65646765723a71713266673539397973717666656672327572307a33346e32646b36663061737a673570736b70653036'
}

module.exports = {
  parserTests,
  creatorTests
}
