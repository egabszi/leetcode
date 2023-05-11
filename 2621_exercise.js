async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
    console.log(millis)
}

sleep(2000).then(console.log)