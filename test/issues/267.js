module.exports = {
  extension: 'js',
  command: 'beautify.beautifyFile',
  beautifySetting: {
  },
  input: `{
    foo: async function() {
      //null 
    },
    bar: async function() {
      //null 
    },
    baz: async function() {
      //null 
    },
    qux: async function() {
      //null 
    },
  }`,
  expected: `{
    foo: async function() {
        //null 
    },
    bar: async function() {
        //null 
    },
    baz: async function() {
        //null 
    },
    qux: async function() {
        //null 
    },
}`
};
