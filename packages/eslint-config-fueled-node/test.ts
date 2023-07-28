function testPromise(): Promise<string> {
  return new Promise(function (resolve: CallableFunction) {
    resolve('foo');
  });
}

void (async function () {
  await testPromise();
})();
