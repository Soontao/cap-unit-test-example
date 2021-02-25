const cluster = require('cluster')

if (cluster.isMaster) {

    console.log("starting...");

    for (var i = 0; i < 4; i++) {
        cluster.fork();
    }

    cluster.on('listening', worker => {
        console.log(`process ${worker.process.pid}: started`);
    });

    cluster.on('exit', worker => {
        console.log(`process ${worker.process.pid}: restarting`);
        setTimeout(function () { cluster.fork(); }, 0);
    });

} else {
    const cds = require("@sap/cds/bin/cds");
    cds.exec("run")
}

