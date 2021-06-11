'use strict'

/*
*  Modify this file as needed.
*/

const http = require('http')

process.on('SIGTERM', function() {
  process.exit(0)
})

function apply(data, mods) {
  for (var path in mods) {
    var k = data;
    var steps = path.split('.');
    var last = steps.pop();
    steps.forEach(e => (k[e] = k[e] || {}) && (k = k[e]));
    k[last] = mods[path];
  }
  return data
}

const packetTypeArray = {
  "1": {
    type: 'array',
    properties: [
      {name: '0.bn', type: 'string'}, {name: '0.bt', type: 'number'},
      {name: '1.n', type: 'string'}, {name: '1.v', type: 'number'}, {name: '1.u', type: 'string'}, 
      {name: '2.n', type: 'string'}, {name: '2.v', type: 'number'}, {name: '2.u', type: 'string'}, 
      {name: '3.n', type: 'string'}, {name: '3.v', type: 'number'}, {name: '3.u', type: 'string'}, 
      {name: '4.n', type: 'string'}, {name: '4.v', type: 'number'}, {name: '4.u', type: 'string'}, 
      {name: '5.n', type: 'string'}, {name: '5.v', type: 'number'}, {name: '5.u', type: 'string'},
      {name: '6.n', type: 'string'}, {name: '6.v', type: 'number'}, {name: '6.u', type: 'string'},
      {name: '7.n', type: 'string'}, {name: '7.v', type: 'number'}, {name: '7.u', type: 'string'},
      {name: '8.n', type: 'string'}, {name: '8.v', type: 'number'}, {name: '8.u', type: 'string'},
      {name: '9.n', type: 'string'}, {name: '9.v', type: 'number'}, {name: '9.u', type: 'string'},
      {name: '10.n', type: 'string'}, {name: '10.v', type: 'number'}, {name: '10.u', type: 'string'},
      {name: '11.n', type: 'string'}, {name: '11.v', type: 'number'}, {name: '11.u', type: 'string'},
      {name: '12.n', type: 'string'}, {name: '12.v', type: 'number'}, {name: '12.u', type: 'string'},
    ]
  },
  "2": {
    type: 'array',
    properties: [
      {name: '0.bn', type: 'string'}, {name: '0.bt', type: 'number'},
      {name: '1.n', type: 'string'}, {name: '1.v', type: 'number'},
      {name: '2.n', type: 'string'}, {name: '2.v', type: 'number'},
      {name: '3.n', type: 'string'}, {name: '3.v', type: 'number'},
      {name: '4.n', type: 'string'}, {name: '4.v', type: 'number'},
      {name: '5.n', type: 'string'}, {name: '5.v', type: 'number'},
      {name: '6.n', type: 'string'}, {name: '6.v', type: 'number'},
      {name: '7.n', type: 'string'}, {name: '7.v', type: 'number'},
      {name: '8.n', type: 'string'}, {name: '8.v', type: 'number'},
      {name: '9.n', type: 'string'}, {name: '9.v', type: 'number'},
      {name: '10.n', type: 'string'}, {name: '10.v', type: 'number'},
      {name: '11.n', type: 'string'}, {name: '11.v', type: 'number'},
      {name: '12.n', type: 'string'}, {name: '12.v', type: 'number'},
      {name: '13.n', type: 'string'}, {name: '13.v', type: 'number'},
      {name: '14.n', type: 'string'}, {name: '14.v', type: 'number'},
      {name: '15.n', type: 'string'}, {name: '15.v', type: 'number'},
      {name: '16.n', type: 'string'}, {name: '16.v', type: 'number'},
      {name: '17.n', type: 'string'}, {name: '17.v', type: 'number'},
      {name: '18.n', type: 'string'}, {name: '18.v', type: 'number'},
    ]
  },
  "3": {
    type: 'array',
    properties: [
      {name: '0.bn', type: 'string'}, {name: '0.bt', type: 'number'},
      {name: '1.n', type: 'string'}, {name: '1.v', type: 'number'},
      {name: '2.n', type: 'string'}, {name: '2.v', type: 'number'},
      {name: '3.n', type: 'string'}, {name: '3.v', type: 'number'},
      {name: '4.n', type: 'string'}, {name: '4.v', type: 'number'},
      {name: '5.n', type: 'string'}, {name: '5.v', type: 'number'},
      {name: '6.n', type: 'string'}, {name: '6.v', type: 'number'},
      {name: '7.n', type: 'string'}, {name: '7.v', type: 'number'},
      {name: '8.n', type: 'string'}, {name: '8.v', type: 'number'},
      {name: '9.n', type: 'string'}, {name: '9.v', type: 'number'},
      {name: '10.n', type: 'string'}, {name: '10.v', type: 'number'},
      {name: '11.n', type: 'string'}, {name: '11.v', type: 'number'},
      {name: '12.n', type: 'string'}, {name: '12.v', type: 'number'},
      {name: '13.n', type: 'string'}, {name: '13.v', type: 'number'},
      {name: '14.n', type: 'string'}, {name: '14.v', type: 'number'},
      {name: '15.n', type: 'string'}, {name: '15.v', type: 'number'},
      {name: '16.n', type: 'string'}, {name: '16.v', type: 'number'},
      {name: '17.n', type: 'string'}, {name: '17.v', type: 'number'},
      {name: '18.n', type: 'string'}, {name: '18.v', type: 'number'},
      {name: '19.n', type: 'string'}, {name: '19.v', type: 'number'},
      {name: '20.n', type: 'string'}, {name: '20.v', type: 'number'},
      {name: '21.n', type: 'string'}, {name: '21.v', type: 'number'},
      {name: '22.n', type: 'string'}, {name: '22.v', type: 'number'},
      {name: '23.n', type: 'string'}, {name: '23.v', type: 'number'},
      {name: '24.n', type: 'string'}, {name: '24.v', type: 'number'},
      {name: '25.n', type: 'string'}, {name: '25.v', type: 'number'},
      {name: '26.n', type: 'string'}, {name: '26.v', type: 'number'},
      {name: '27.n', type: 'string'}, {name: '27.v', type: 'number'},
      {name: '28.n', type: 'string'}, {name: '28.v', type: 'number'},
      {name: '29.n', type: 'string'}, {name: '29.v', type: 'number'},
      {name: '30.n', type: 'string'}, {name: '30.v', type: 'number'},
      {name: '31.n', type: 'string'}, {name: '31.v', type: 'number'},
      {name: '32.n', type: 'string'}, {name: '32.v', type: 'number'},
      {name: '33.n', type: 'string'}, {name: '33.v', type: 'number'},
      {name: '34.n', type: 'string'}, {name: '34.v', type: 'number'},
      {name: '35.n', type: 'string'}, {name: '35.v', type: 'number'},
      {name: '36.n', type: 'string'}, {name: '36.v', type: 'number'},
      {name: '37.n', type: 'string'}, {name: '37.v', type: 'number'},
      {name: '38.n', type: 'string'}, {name: '38.v', type: 'number'},
      {name: '39.n', type: 'string'}, {name: '39.v', type: 'number'},
      {name: '40.n', type: 'string'}, {name: '40.v', type: 'number'},
      {name: '41.n', type: 'string'}, {name: '41.v', type: 'number'},
      {name: '42.n', type: 'string'}, {name: '42.v', type: 'number'},
      {name: '43.n', type: 'string'}, {name: '43.v', type: 'number'},
      {name: '44.n', type: 'string'}, {name: '44.v', type: 'number'},
      {name: '45.n', type: 'string'}, {name: '45.v', type: 'number'},
      {name: '46.n', type: 'string'}, {name: '46.v', type: 'number'},
      {name: '47.n', type: 'string'}, {name: '47.v', type: 'number'},
      {name: '48.n', type: 'string'}, {name: '48.v', type: 'number'},
      {name: '49.n', type: 'string'}, {name: '49.v', type: 'number'},
      {name: '50.n', type: 'string'}, {name: '50.v', type: 'number'},
      {name: '51.n', type: 'string'}, {name: '51.v', type: 'number'},
    ]
  },
  "4": {
    type: 'array',
    properties: [
      {name: '0.bn', type: 'string'}, {name: '0.bt', type: 'number'},
      {name: '1.n', type: 'string'}, {name: '1.v', type: 'number'},
      {name: '2.n', type: 'string'}, {name: '2.v', type: 'number'},
      {name: '3.n', type: 'string'}, {name: '3.v', type: 'number'},
      {name: '4.n', type: 'string'}, {name: '4.v', type: 'number'},
      {name: '5.n', type: 'string'}, {name: '5.v', type: 'number'},
      {name: '6.n', type: 'string'}, {name: '6.v', type: 'number'},
      {name: '7.n', type: 'string'}, {name: '7.v', type: 'number'},
      {name: '8.n', type: 'string'}, {name: '8.v', type: 'number'},
      {name: '9.n', type: 'string'}, {name: '9.v', type: 'number'},
      {name: '10.n', type: 'string'}, {name: '10.v', type: 'number'},
      {name: '11.n', type: 'string'}, {name: '11.v', type: 'number'},
      {name: '12.n', type: 'string'}, {name: '12.v', type: 'number'},
      {name: '13.n', type: 'string'}, {name: '13.v', type: 'number'},
      {name: '14.n', type: 'string'}, {name: '14.v', type: 'number'},
      {name: '15.n', type: 'string'}, {name: '15.v', type: 'number'},
      {name: '16.n', type: 'string'}, {name: '16.v', type: 'number'},
      {name: '17.n', type: 'string'}, {name: '17.v', type: 'number'},
      {name: '18.n', type: 'string'}, {name: '18.v', type: 'number'},
      {name: '19.n', type: 'string'}, {name: '19.v', type: 'number'},
      {name: '20.n', type: 'string'}, {name: '20.v', type: 'number'},
      {name: '21.n', type: 'string'}, {name: '21.v', type: 'number'},
      {name: '22.n', type: 'string'}, {name: '22.v', type: 'number'},
      {name: '23.n', type: 'string'}, {name: '23.v', type: 'number'},
      {name: '24.n', type: 'string'}, {name: '24.v', type: 'number'},
      {name: '25.n', type: 'string'}, {name: '25.v', type: 'number'},
      {name: '26.n', type: 'string'}, {name: '26.v', type: 'number'},
      {name: '27.n', type: 'string'}, {name: '27.v', type: 'number'},
      {name: '28.n', type: 'string'}, {name: '28.v', type: 'number'},
      {name: '29.n', type: 'string'}, {name: '29.v', type: 'number'},
      {name: '30.n', type: 'string'}, {name: '30.v', type: 'number'},
      {name: '31.n', type: 'string'}, {name: '31.v', type: 'number'},
      {name: '32.n', type: 'string'}, {name: '32.v', type: 'number'},
      {name: '33.n', type: 'string'}, {name: '33.v', type: 'number'},
      {name: '34.n', type: 'string'}, {name: '34.v', type: 'number'},
      {name: '35.n', type: 'string'}, {name: '35.v', type: 'number'},
      {name: '36.n', type: 'string'}, {name: '36.v', type: 'number'},
      {name: '37.n', type: 'string'}, {name: '37.v', type: 'number'},
      {name: '38.n', type: 'string'}, {name: '38.v', type: 'number'},
      {name: '39.n', type: 'string'}, {name: '39.v', type: 'number'},
      {name: '40.n', type: 'string'}, {name: '40.v', type: 'number'},
      {name: '41.n', type: 'string'}, {name: '41.v', type: 'number'},
      {name: '42.n', type: 'string'}, {name: '42.v', type: 'number'},
      {name: '43.n', type: 'string'}, {name: '43.v', type: 'number'},
      {name: '44.n', type: 'string'}, {name: '44.v', type: 'number'},
      {name: '45.n', type: 'string'}, {name: '45.v', type: 'number'},
      {name: '46.n', type: 'string'}, {name: '46.v', type: 'number'},
      {name: '47.n', type: 'string'}, {name: '47.v', type: 'number'},
      {name: '48.n', type: 'string'}, {name: '48.v', type: 'number'},
      {name: '49.n', type: 'string'}, {name: '49.v', type: 'number'},
      {name: '50.n', type: 'string'}, {name: '50.v', type: 'number'},
      {name: '51.n', type: 'string'}, {name: '51.v', type: 'number'},
      {name: '52.n', type: 'string'}, {name: '52.v', type: 'number'},
      {name: '53.n', type: 'string'}, {name: '53.v', type: 'number'},
      {name: '54.n', type: 'string'}, {name: '54.v', type: 'number'},
      {name: '55.n', type: 'string'}, {name: '55.v', type: 'number'},
      {name: '56.n', type: 'string'}, {name: '56.v', type: 'number'},
    ]
  },
  "5": {
    type: 'array',
    properties: [
      {name: '0.bn', type: 'string'}, {name: '0.bt', type: 'number'},
      {name: '1.n', type: 'string'}, {name: '1.v', type: 'number'},
      {name: '2.n', type: 'string'}, {name: '2.v', type: 'number'},
      {name: '3.n', type: 'string'}, {name: '3.v', type: 'number'},
      {name: '4.n', type: 'string'}, {name: '4.v', type: 'number'},
      {name: '5.n', type: 'string'}, {name: '5.v', type: 'number'},
      {name: '6.n', type: 'string'}, {name: '6.v', type: 'number'},
      {name: '7.n', type: 'string'}, {name: '7.v', type: 'number'},
      {name: '8.n', type: 'string'}, {name: '8.v', type: 'number'},
      {name: '9.n', type: 'string'}, {name: '9.v', type: 'number'},
      {name: '10.n', type: 'string'}, {name: '10.v', type: 'number'},
      {name: '11.n', type: 'string'}, {name: '11.v', type: 'number'},
      {name: '12.n', type: 'string'}, {name: '12.v', type: 'number'},
    ]
  },
  "6": {
    type: 'array',
    properties: [
      {name: '0.bn', type: 'string'}, {name: '0.bt', type: 'number'},
      {name: '1.n', type: 'string'}, {name: '1.v', type: 'number'},
      {name: '2.n', type: 'string'}, {name: '2.v', type: 'number'},
      {name: '3.n', type: 'string'}, {name: '3.v', type: 'number'},
      {name: '4.n', type: 'string'}, {name: '4.v', type: 'number'},
      {name: '5.n', type: 'string'}, {name: '5.v', type: 'number'},
      {name: '6.n', type: 'string'}, {name: '6.v', type: 'number'},
      {name: '7.n', type: 'string'}, {name: '7.v', type: 'number'},
      {name: '8.n', type: 'string'}, {name: '8.v', type: 'number'},
      {name: '9.n', type: 'string'}, {name: '9.v', type: 'number'},
      {name: '10.n', type: 'string'}, {name: '10.v', type: 'number'},
      {name: '11.n', type: 'string'}, {name: '11.v', type: 'number'},
      {name: '12.n', type: 'string'}, {name: '12.v', type: 'number'},
      {name: '13.n', type: 'string'}, {name: '13.v', type: 'number'},
      {name: '14.n', type: 'string'}, {name: '14.v', type: 'number'},
      {name: '15.n', type: 'string'}, {name: '15.v', type: 'number'},
      {name: '16.n', type: 'string'}, {name: '16.v', type: 'number'},
      {name: '17.n', type: 'string'}, {name: '17.v', type: 'number'},
      {name: '18.n', type: 'string'}, {name: '18.v', type: 'number'},
      {name: '19.n', type: 'string'}, {name: '19.v', type: 'number'},
      {name: '20.n', type: 'string'}, {name: '20.v', type: 'number'},
      {name: '21.n', type: 'string'}, {name: '21.v', type: 'number'},
      {name: '22.n', type: 'string'}, {name: '22.v', type: 'number'},
      {name: '23.n', type: 'string'}, {name: '23.v', type: 'number'},
    ]
  },
  "7": {
    type: 'object',
    properties: [
      {name: 'deviceId', type: 'string'},
      {name: 'readings', type: 'array'},
      {name: 'readings.0.meaning', type: 'string'},
      {name: 'readings.0.value', type: 'number'},
      {name: 'received', type: 'number'},
    ]
  },
  "8": {
    type: 'object',
    properties: [
      {name: 'deviceId', type: 'string'},
      {name: 'readings', type: 'array'},
      {name: 'readings.0.path', type: 'string'},
      {name: 'readings.0.meaning', type: 'string'},
      {name: 'readings.0.value', type: 'object'},
      {name: 'readings.0.value.x', type: 'number'},
      {name: 'readings.0.value.y', type: 'number'},
      {name: 'readings.0.value.z', type: 'number'},
      {name: 'received', type: 'number'},
    ]
  },
  "9": {
    type: 'object',
    properties: [
      {name: 'deviceId', type: 'string'},
      {name: 'readings', type: 'array'},
      {name: 'readings.0.path', type: 'string'}, {name: 'readings.0.meaning', type: 'string'}, {name: 'readings.0.value', type: 'number'},
      {name: 'readings.1.path', type: 'string'}, {name: 'readings.1.meaning', type: 'string'}, {name: 'readings.1.value', type: 'number'},
      {name: 'readings.2.path', type: 'string'}, {name: 'readings.2.meaning', type: 'string'}, {name: 'readings.2.value', type: 'number'},
      {name: 'readings.3.path', type: 'string'}, {name: 'readings.3.meaning', type: 'string'}, {name: 'readings.3.value', type: 'number'},
      {name: 'readings.4.path', type: 'string'}, {name: 'readings.4.meaning', type: 'string'}, {name: 'readings.4.value', type: 'number'},
      {name: 'readings.5.path', type: 'string'}, {name: 'readings.5.meaning', type: 'string'}, {name: 'readings.5.value', type: 'boolean'},
      {name: 'readings.6.path', type: 'string'}, {name: 'readings.6.meaning', type: 'string'}, {name: 'readings.6.value', type: 'string'},
      {name: 'received', type: 'number'},
    ]
  },
  "10": {
    type: 'object',
    properties: [
      {name: 'deviceId', type: 'string'},
      {name: 'readings', type: 'array'},
      {name: 'readings.0.path', type: 'string'},
      {name: 'readings.0.meaning', type: 'string'},
      {name: 'readings.0.value', type: 'number'},
      {name: 'received', type: 'number'},
    ]
  },
  "11": {
    type: 'object',
    properties: [
      {name: 'deviceId', type: 'string'},
      {name: 'readings', type: 'array'},
      {name: 'readings.0.path', type: 'string'},
      {name: 'readings.0.meaning', type: 'string'},
      {name: 'readings.0.value', type: 'string'},
      {name: 'received', type: 'number'},
    ]
  },
}

let totalBytes = 0
const server = http.createServer(function(req, res) {
  let body = []

  req.on('data', body.push.bind(body))
  req.on('end', () => {
    const dataString = Buffer.concat(body).toString()
    const dataArray = dataString.split(',')
    //  get packetType from first parameter
    let packetType= dataArray.shift()
    let jsonData =  packetTypeArray[packetType].type === 'object' ? {} : []; 
    let mods={}
    packetTypeArray[packetType].properties.forEach( (param, index) => {
      if(param.type === 'array')
        mods[param.name] = []
      else if(param.type === 'object')
        mods[param.name] = {}
      else if(param.type === 'string'){
        mods[param.name] = dataArray[index]
      } else if(param.type === 'number'){
        mods[param.name] = Number(dataArray[index])
      } else if(param.type === 'boolean'){
        mods[param.name] = JSON.parse(dataArray[index] || false)
      } 
    });
    apply(jsonData, mods)
    // just print to stdout
    console.log(JSON.stringify(jsonData))
    totalBytes += req.connection.bytesRead
    console.error("Total bytes: ", totalBytes, " | Bytes read: ", req.connection.bytesRead)
    res.end()
  })
})

server.listen(8080)
