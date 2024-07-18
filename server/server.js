require('dotenv').config()
const https = require('https');
const fs = require('fs');
const express = require('express');
const cron = require('node-cron');
const cors = require('cors');
const mongoose = require("mongoose");
const { Server } = require('socket.io');

const controller = require('./modules');
const SubmissionMiddleware = require('./middleware/submission')

const app = express();
const PORT = process.env.PORT | 3001;

// const io = new Server(server);


const privateKey = fs.readFileSync("/home/ec2-user/TrigentCert/trigent_wildcard_15March2024.key", "utf8");
const certificate = fs.readFileSync("/home/ec2-user/TrigentCert/server.pem", "utf8");

let option = {
    key: privateKey,
    cert: certificate
};

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database has Connected");
}).catch(err => {
    console.log("Error : " + err);
});

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const userSocketMap = {};
// function getAllConnectedClients(roomId) {
//     // Map
//     return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
//         (socketId) => {
//             return {
//                 socketId,
//                 username: userSocketMap[socketId],
//             };
//         }
//     );
// }

app.use(controller);

// Socket Implementation
/* io.on('connection', (socket) => {
    console.log('socket connected', socket.id);

    socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
        userSocketMap[socket.id] = username;
        socket.join(roomId);
        const clients = getAllConnectedClients(roomId);
        clients.forEach(({ socketId }) => {
            io.to(socketId).emit(ACTIONS.JOINED, {
                clients,
                username,
                socketId: socket.id,
            });
        });
    });

    socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
        socket.in(roomId).emit(ACTIONS.CODE_CHANGE, { code });
    });

    socket.on(ACTIONS.SYNC_CODE, ({ socketId, code }) => {
        io.to(socketId).emit(ACTIONS.CODE_CHANGE, { code });
    });

    socket.on('disconnecting', () => {
        const rooms = [...socket.rooms];
        rooms.forEach((roomId) => {
            socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
                socketId: socket.id,
                username: userSocketMap[socket.id],
            });
        });
        delete userSocketMap[socket.id];
        socket.leave();
    });
}); */


cron.schedule("59 59 23 * * *", function () {
    console.log("running a task every day");
    SubmissionMiddleware.rejectUnsubmittedApis()
});

const server = https.createServer(option, app);

server.listen(PORT, () => console.log('Server is running on port no ' + PORT));