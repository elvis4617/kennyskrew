var express  = require('express');
var app = express();
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
//your database location
var db = new sqlite3.Database("/Users/thanhpham/Downloads/LibertyMutual.db");

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../gui"));



app.put('/update/scheduleStartTime', function(req, res) {
  db.serialize(function() {
    db.all("UPDATE C_DRIVER_SCHEDULE SET schdl_start_dtm = '" + req.body.sche_start + "' WHERE run_nme = '" + req.body.runName + "' AND audit_id = " + req.body.auditId + " ", function(err){
        console.log(req.body)
        if(err){
          res.send("Error when querrying");
        }
        else {
          db.all("SELECT * FROM C_DRIVER_SCHEDULE WHERE audit_id = " + req.body.auditId + " ", function(err, rows){
              if(err){
                console.log("Error");
              }
              else {
                console.log(rows);
                res.json(rows);
              }
          });
        }
    });
  });
});

app.put('/update/statusCode', function(req, res) {
  db.serialize(function() {
    db.all("UPDATE C_DRIVER_SCHEDULE SET stts_cd = '" + req.body.Status + "' WHERE run_nme = '" + req.body.runName + "' AND audit_id = " + req.body.auditId + " ", function(err){
        console.log(req.body)
        if(err){
          res.send("Error when querrying");
        }
        else {
          db.all("SELECT * FROM C_DRIVER_SCHEDULE WHERE audit_id = " + req.body.auditId + " ", function(err, rows){
              if(err){
                console.log("Error");
              }
              else {
                res.json(rows);
              }
          });
        }
    });
  });
});

app.put('/update/valuationEnd', function(req, res) {
    console.log(req.body);
    res.end();
});

app.put('/update/valuationStart', function(req, res) {
    console.log(req.body);
    res.end();
});

app.put('/update/sla_by_audit', function(req, res) {
    console.log(req.body);
    res.end();
});

app.put('/update/sla_by_runname', function(req, res) {
    console.log(req.body);
    res.end();
});

app.put('/update/histoy_SLA', function(req, res) {
    console.log(req.body);
    res.end();
});

app.put('/update/status_name_grpNumder', function(req, res) {
    console.log(req.body);
    res.end();
});

app.put('/update/status_name_dtlID', function(req, res) {
    console.log(req.body);
    res.end();
});

app.put('/update/active_step_indicator_stepID', function(req, res) {
    console.log(req.body);
    res.end();
});

app.put('/update/active_step_indicator_runName_stepID', function(req, res) {
    console.log(req.body);
    res.end();
});

app.put('/update/active_step_indicator_runName', function(req, res) {
    console.log(req.body);
    res.end();
});

app.put('/update/active_step_indicator_runName_grpNumber', function(req, res) {
    console.log(req.body);
    res.end();
});



app.listen(3000, function() {
    console.log("App listening on port 3000");
});
