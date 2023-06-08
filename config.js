module.exports = {
    app: {
        tokens: [
            'MTExNTczNTE2MDMwMjg3MDU1OQ.GAdIy7._7vEUd0HSV5nfFSPFpdB0lcNNldFoYUlFi0M78',
            'MTExNTcyMDYwMzQ4ODQ5MzU3OA.G2qF2G.WrwV4BX6a2qISzfP-Uiy5HtP0W2kdTKbUS7rPs'
        ],
        playing: 'by tgx',
        global: true,
        guild: 'XXX'
    },
    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
