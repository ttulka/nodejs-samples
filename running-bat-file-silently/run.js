const {spawn, exec, execFile, fork} = require('child_process')

//const child = exec('run.bat')

// https://nodejs.org/api/child_process.html#child_process_spawning_bat_and_cmd_files_on_windows
// spawn('cmd.exe', ['/c', 'run.bat'], {
//     shell: false,
//     detached: true,
//     stdio: 'ignore',
//     windowsHide: true
// }).unref()

// spawn('node.exe', ['my-app.js'], {
//     shell: false,
//     detached: true,
//     stdio: 'ignore',
//     windowsHide: true
// }).unref()

// var p = fork('my-app.js')
// p.disconnect();
// p.unref()

// this works!
spawn('cmd.exe', ['/c', 'run.vbs'], {
    shell: false,
    detached: true,
    stdio: 'ignore',
    windowsHide: true
}).unref()


// process.stdin.pipe(child.stdin)
//
// child.on('exit', (code, signal) => {
//     console.log('child process exited with ' +
//                 `code ${code} and signal ${signal}`);
// })
//
// child.on('error', error => {
//     console.log('child process error ' +
//                 `code ${error}`);
//     console.log(error)
// })
//
// child.on('message', msg => {
//     console.log('child process message: ' + msg)
// })
//
// child.stdout.on('data', data => {
//     console.log('data', data.toString())
// })
//
// child.stderr.on('data', data => {
//     console.log('error', data.toString())
// })