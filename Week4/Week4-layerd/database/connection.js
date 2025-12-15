const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
require('dotenv').config();

class Database {
    constructor() {
        this.db = null;
    }

    connect() {
        return new Promise((resolve, reject) => {
            const dbPath = process.env.DB_PATH || './database/tasks.db';
            const schemaPath = path.join(__dirname, 'schema.sql');

            this.db = new sqlite3.Database(dbPath, (err) => {
                if (err) {
                    console.error('❌ เชื่อมต่อฐานข้อมูลล้มเหลว:', err.message);
                    reject(err);
                } else {
                    console.log('✅ เชื่อมต่อฐานข้อมูลสำเร็จ:', dbPath);
                    this.db.run('PRAGMA foreign_keys = ON');

                    // 🔥 รัน schema.sql ตอน start
                    const schema = fs.readFileSync(schemaPath, 'utf8');
                    this.db.exec(schema, (err) => {
                        if (err) {
                            console.error('❌ สร้าง schema ไม่สำเร็จ:', err.message);
                            reject(err);
                        } else {
                            console.log('✅ Database schema initialized');
                            resolve(this.db);
                        }
                    });
                }
            });
        });
    }

    getConnection() {
        if (!this.db) {
            throw new Error('ยังไม่ได้เชื่อมต่อฐานข้อมูล เรียก connect() ก่อน');
        }
        return this.db;
    }

    close() {
        return new Promise((resolve, reject) => {
            if (this.db) {
                this.db.close((err) => {
                    if (err) reject(err);
                    else {
                        console.log('✅ ปิดการเชื่อมต่อฐานข้อมูล');
                        resolve();
                    }
                });
            } else {
                resolve();
            }
        });
    }

    run(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, function(err) {
                if (err) reject(err);
                else resolve({ lastID: this.lastID, changes: this.changes });
            });
        });
    }

    get(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.get(sql, params, (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    }

    all(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }
}

// Singleton
const database = new Database();
module.exports = database;
