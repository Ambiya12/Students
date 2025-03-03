import chalk from 'chalk';
import http from 'http';
import fs from 'fs';
import axios from 'axios';

const PORT = 8000;
const HOST = 'localhost';
const FILE_PATH = './hello.txt';
const GOOGLE_HTML_PATH = './google.html';

fs.writeFile(FILE_PATH, 'Hello World!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File has been created');

    fs.readFile(FILE_PATH, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File Content:', data);
    });
});

const fetchGoogle = async () => {
    try {
        const response = await axios.get('http://www.google.com');
        
        fs.writeFile('google.html', response.data, (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('Google homepage saved as google.html');
        });
    } catch (err) {
        console.error('Error fetching Google:', err);
    }
};

fetchGoogle();

console.log(chalk.red('Daphnée'));
console.log(chalk.blue('Fadia'));
console.log(chalk.green('David'));
console.log(chalk.yellow('Coralie'));
console.log(chalk.magenta('Toni'));
console.log(chalk.cyan('Julie'));
console.log(chalk.white('Lucie'));
console.log(chalk.gray('Maxime'));
console.log(chalk.red('Marie'));

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World!</h1>');
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});


/*

const server = http.createServer((req, res) => {
  res.end('Welcome to my first HTTP server');
})

server.listen(PORT, localhost, () => {
  console.log(`Server is running on port ${PORT}`);
});

*/