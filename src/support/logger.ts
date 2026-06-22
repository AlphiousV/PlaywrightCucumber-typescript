import winston from "winston";

// Define custom colors for log levels
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue',
};

winston.addColors(colors);


// Define the log format
const logFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.colorize({ all: true }), // Colorize the whole line
    winston.format.printf(
        (info) => `[${info.timestamp}] [${info.level}]: ${info.message}`
    )
);

// Create the logger instance
export const logger = winston.createLogger({
    level: 'debug', // Lowest level to print (debug, info, warn, error)
    transports: [
        new winston.transports.Console({
            format: logFormat,
        }),
    ],
});