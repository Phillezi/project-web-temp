db = db.getSiblingDB('goDB');
db.createUser({
    user: "go_secret_user",
    pwd: "go_secret_pass",
    roles: [{ role: "readWrite", db: "goDB" }]
});