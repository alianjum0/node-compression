# Backend Developer Job Applicant Test - Node.js

This is a framework for building a simple client and server in Node.js.  

## Strategy for reducing data transfer over network
* This strategy reduced the bytes transferred on internet from 122005 to 78986
  bytes. 
* Packets are transferred using ',' separated values instead of JSON
* This strategy can be improved by removing the type of sensor reading send.
* The assumption is made that packets are of defined type.
* In the test dataset, we have 11 types of packets. These packets are defined
  on number of parameters and types of data.
    1. **packet[0].bn** is one of ['amb1/modbus/agg1-strom/','amb1/modbus/agg2-strom/', 'amb1/modbus/etima-strom/', 'amb1/modbus/fuller-strom/', 'amb1/modbus/packer-strom/', 'amb1/modbus/palletierer-strom/']
    2. **packet[0].bn** is: 'amb1/s7/blasmaschine/'
    3. **packet[0].bn** is: 'amb1/s7/etima/'
    4. **packet[0].bn** is: 'amb1/s7/fuller/'
    5. **packet[0].bn** is: 'amb1/s7/packer/'
    6. **packet[0].bn** is: 'amb1/s7/palletierer/'
    7. **reading[0].meaning** is one of: ['tem1', 'tem2', 'tem3', 'tem4']
    8. **reading[0].meaning** is one of: ['acceleration', 'magneticField', 'angularSpeed']
    9. **reading[0].path** is: 'main'
    10. **reading[0].meaning** is one of: ['humidity', 'luminosity', 'temperature']
    11. **reading[0].path** is: 'total'

## Packets and converted String
### Packet 1
```
[{"bn":"amb1/modbus/agg1-strom/","bt":1480001428.058},{"n":"V a-n","v":230.7759552001953,"u":"V"},{"n":"V b-n","v":230.7440948486328,"u":"V"},{"n":"V c-n","v":230.74256896972656,"u":"V"},{"n":"I a","v":2.918856382369995,"u":"A"},{"n":"I b","v":2.7666494846343994,"u":"A"},{"n":"I c","v":2.7530789375305176,"u":"A"},{"n":"P a","v":442.8495788574219,"u":"W"},{"n":"P b","v":415.97491455078125,"u":"W"},{"n":"P c","v":400.436767578125,"u":"W"},{"n":"MP a","v":637.7411499023438,"u":"W"},{"n":"MP b","v":606.9644165039062,"u":"W"},{"n":"MP c","v":587.9564819335938,"u":"W"}]
```
Converted String
```
1,amb1/modbus/agg1-strom/,1480001428.058,V a-n,230.7759552001953,V,V b-n,230.7440948486328,V,V c-n,230.74256896972656,V,I a,2.918856382369995,A,I b,2.7666494846343994,A,I c,2.7530789375305176,A,P a,442.8495788574219,W,P b,415.97491455078125,W,P c,400.436767578125,W,MP a,637.7411499023438,W,MP b,606.9644165039062,W,MP c,587.9564819335938,W
```

### Packet 2
```
[{"bn":"amb1/s7/blasmaschine/","bt":1480001429.133},{"n":"WS_Cur_Mode","v":8},{"n":"WS_Cur_Prog","v":1},{"n":"WS_Cur_State","v":128},{"n":"WS_Not_Of_Fail_Code","v":0},{"n":"KRO_First_Fault_M_Nu","v":0},{"n":"KRO_First_Fault_S_Nu","v":0},{"n":"WS_Pointer_Code","v":30009120},{"n":"KRO_Last_Warn_M_Num","v":9120},{"n":"KRO_Last_Warn_S_Num","v":3000},{"n":"KRO_Prod_Typ","v":1027},{"n":"KRO_Operating_Hours","v":11644},{"n":"WS_Cur_Mach_Spd","v":900},{"n":"WS_Mach_Design_Spd","v":900},{"n":"WS_Bottle_Type","v":1027},{"n":"KRO_Temp_Set_Poi_Pre","v":126},{"n":"KRO_Temp_Act_Val_Pre","v":1.7656360650492695e-43},{"n":"WS_Tot_Bottles","v":25102},{"n":"KRO_Prod_Count_Prefo","v":25115}]
```
Converted String
```
2,amb1/s7/blasmaschine/,1480001429.133,WS_Cur_Mode,8,WS_Cur_Prog,1,WS_Cur_State,128,WS_Not_Of_Fail_Code,0,KRO_First_Fault_M_Nu,0,KRO_First_Fault_S_Nu,0,WS_Pointer_Code,30009120,KRO_Last_Warn_M_Num,9120,KRO_Last_Warn_S_Num,3000,KRO_Prod_Typ,1027,KRO_Operating_Hours,11644,WS_Cur_Mach_Spd,900,WS_Mach_Design_Spd,900,WS_Bottle_Type,1027,KRO_Temp_Set_Poi_Pre,126,KRO_Temp_Act_Val_Pre,1.7656360650492695e-43,WS_Tot_Bottles,25102,KRO_Prod_Count_Prefo,25115
```

### Packet 3
```
[{"bn":"amb1/s7/etima/","bt":1480001428.946},{"n":"WS_Cur_Mode","v":8},{"n":"WS_Cur_Prog","v":1},{"n":"WS_Cur_State","v":128},{"n":"WS_Not_Of_Fail_Code","v":0},{"n":"KRO_First_Fault_M_Nu","v":0},{"n":"KRO_First_Fault_S_Nu","v":0},{"n":"WS_Pointer_Code","v":10811195},{"n":"KRO_Last_Warn_M_Num","v":1195},{"n":"KRO_Last_Warn_S_Num","v":1081},{"n":"KRO_Prod_Typ","v":1050},{"n":"KRO_Operating_Hours","v":4064},{"n":"WS_Pack_Media_Type","v":1050},{"n":"WS_Tot_Packages","v":36709},{"n":"KRO_Check1_DivCnt_1","v":0},{"n":"KRO_Check1_DivCnt_2","v":0},{"n":"KRO_Check1_DivCnt_3","v":0},{"n":"KRO_Check1_DivCnt_4","v":0},{"n":"KRO_Check1_ErrCnt_1","v":0},{"n":"KRO_Check1_ErrCnt_2","v":0},{"n":"KRO_Check1_ErrCnt_3","v":0},{"n":"KRO_Check1_ErrCnt_4","v":0},{"n":"KRO_Check1_ErrCnt_5","v":0},{"n":"KRO_Check1_ErrCnt_6","v":0},{"n":"KRO_Check1_ErrCnt_7","v":0},{"n":"KRO_Check1_ErrCnt_8","v":0},{"n":"KRO_Check1_ErrCnt_9","v":0},{"n":"KRO_Check1_ErrCnt_10","v":0},{"n":"KRO_Check1_ErrCnt_11","v":0},{"n":"KRO_Check1_ErrCnt_12","v":0},{"n":"KRO_Check1_ErrCnt_13","v":0},{"n":"KRO_Check1_ErrCnt_14","v":0},{"n":"KRO_Check1_ErrCnt_15","v":0},{"n":"KRO_Check1_ErrCnt_16","v":0},{"n":"KRO_Check1_ErrCnt_17","v":0},{"n":"KRO_Check1_ErrCnt_18","v":0},{"n":"KRO_Check1_ErrCnt_19","v":0},{"n":"KRO_Check1_ErrCnt_20","v":0},{"n":"KRO_Check1_ErrCnt_21","v":0},{"n":"KRO_Check1_ErrCnt_22","v":0},{"n":"KRO_Check1_ErrCnt_23","v":0},{"n":"KRO_Check1_Tot_Btl","v":36513},{"n":"KRO_Check1_Sp_1","v":0},{"n":"KRO_Check1_Sp_2","v":0},{"n":"KRO_Check1_Sp_3","v":0},{"n":"KRO_Check1_Sp_4","v":0},{"n":"KRO_Check1_Sp_5","v":0},{"n":"WS_Cur_Mach_Spd","v":1.3872854796815689e-42},{"n":"WS_Mach_Design_Spd","v":1.2849906917858573e-42},{"n":"WS_Bottle_Type","v":1050},{"n":"WS_Date_Coding","v":0},{"n":"WS_Tot_Bottles","v":36709}]
```
Converted String
```
3,amb1/s7/etima/,1480001428.946,WS_Cur_Mode,8,WS_Cur_Prog,1,WS_Cur_State,128,WS_Not_Of_Fail_Code,0,KRO_First_Fault_M_Nu,0,KRO_First_Fault_S_Nu,0,WS_Pointer_Code,10811195,KRO_Last_Warn_M_Num,1195,KRO_Last_Warn_S_Num,1081,KRO_Prod_Typ,1050,KRO_Operating_Hours,4064,WS_Pack_Media_Type,1050,WS_Tot_Packages,36709,KRO_Check1_DivCnt_1,0,KRO_Check1_DivCnt_2,0,KRO_Check1_DivCnt_3,0,KRO_Check1_DivCnt_4,0,KRO_Check1_ErrCnt_1,0,KRO_Check1_ErrCnt_2,0,KRO_Check1_ErrCnt_3,0,KRO_Check1_ErrCnt_4,0,KRO_Check1_ErrCnt_5,0,KRO_Check1_ErrCnt_6,0,KRO_Check1_ErrCnt_7,0,KRO_Check1_ErrCnt_8,0,KRO_Check1_ErrCnt_9,0,KRO_Check1_ErrCnt_10,0,KRO_Check1_ErrCnt_11,0,KRO_Check1_ErrCnt_12,0,KRO_Check1_ErrCnt_13,0,KRO_Check1_ErrCnt_14,0,KRO_Check1_ErrCnt_15,0,KRO_Check1_ErrCnt_16,0,KRO_Check1_ErrCnt_17,0,KRO_Check1_ErrCnt_18,0,KRO_Check1_ErrCnt_19,0,KRO_Check1_ErrCnt_20,0,KRO_Check1_ErrCnt_21,0,KRO_Check1_ErrCnt_22,0,KRO_Check1_ErrCnt_23,0,KRO_Check1_Tot_Btl,36513,KRO_Check1_Sp_1,0,KRO_Check1_Sp_2,0,KRO_Check1_Sp_3,0,KRO_Check1_Sp_4,0,KRO_Check1_Sp_5,0,WS_Cur_Mach_Spd,1.3872854796815689e-42,WS_Mach_Design_Spd,1.2849906917858573e-42,WS_Bottle_Type,1050,WS_Date_Coding,0,WS_Tot_Bottles,36709
```

### Packet 4
```
[{"bn":"amb1/s7/fuller/","bt":1480001428.958},{"n":"WS_Cur_Mode","v":8},{"n":"WS_Cur_Prog","v":1},{"n":"WS_Cur_State","v":128},{"n":"WS_Not_Of_Fail_Code","v":0},{"n":"KRO_First_Fault_M_Nu","v":0},{"n":"KRO_First_Fault_S_Nu","v":0},{"n":"WS_Pointer_Code","v":20002810},{"n":"KRO_Last_Warn_M_Num","v":2810},{"n":"KRO_Last_Warn_S_Num","v":2000},{"n":"KRO_Prod_Typ","v":1050},{"n":"KRO_Operating_Hours","v":4555},{"n":"WS_Pack_Media_Type","v":33558528},{"n":"WS_Tot_Packages","v":33558528},{"n":"KRO_Check1_DivCnt_1","v":29},{"n":"KRO_Check1_DivCnt_2","v":0},{"n":"KRO_Check1_DivCnt_3","v":0},{"n":"KRO_Check1_DivCnt_4","v":0},{"n":"KRO_Check1_ErrCnt_1","v":0},{"n":"KRO_Check1_ErrCnt_2","v":0},{"n":"KRO_Check1_ErrCnt_3","v":0},{"n":"KRO_Check1_ErrCnt_4","v":0},{"n":"KRO_Check1_ErrCnt_5","v":11},{"n":"KRO_Check1_ErrCnt_6","v":1},{"n":"KRO_Check1_ErrCnt_7","v":0},{"n":"KRO_Check1_ErrCnt_8","v":1},{"n":"KRO_Check1_ErrCnt_9","v":1},{"n":"KRO_Check1_ErrCnt_10","v":0},{"n":"KRO_Check1_ErrCnt_11","v":21},{"n":"KRO_Check1_ErrCnt_12","v":0},{"n":"KRO_Check1_ErrCnt_13","v":0},{"n":"KRO_Check1_ErrCnt_14","v":0},{"n":"KRO_Check1_ErrCnt_15","v":0},{"n":"KRO_Check1_ErrCnt_16","v":0},{"n":"KRO_Check1_ErrCnt_17","v":0},{"n":"KRO_Check1_ErrCnt_18","v":0},{"n":"KRO_Check1_ErrCnt_19","v":0},{"n":"KRO_Check1_ErrCnt_20","v":0},{"n":"KRO_Check1_ErrCnt_21","v":0},{"n":"KRO_Check1_ErrCnt_22","v":0},{"n":"KRO_Check1_ErrCnt_23","v":0},{"n":"KRO_Check1_Tot_Btl","v":39124},{"n":"KRO_Check1_Sp_1","v":0},{"n":"KRO_Check1_Sp_2","v":0},{"n":"KRO_Check1_Sp_3","v":0},{"n":"KRO_Check1_Sp_4","v":0},{"n":"KRO_Check1_Sp_5","v":0},{"n":"WS_Prog_Step","v":33558528},{"n":"WS_Cur_Mach_Spd","v":54499},{"n":"WS_Mach_Design_Spd","v":54499},{"n":"WS_Bottle_Type","v":0},{"n":"WS_Press_Bottling","v":4.03797721862793},{"n":"WS_Temp_Product","v":19.76453971862793},{"n":"KRO_Fill_Level","v":130.56207275390625},{"n":"KRO_Press_Prod_In","v":5.03797721862793},{"n":"WS_Tot_Bottles","v":41169},{"n":"WS_Bad_Packages","v":33558528}]
```
Converted String
```
44,amb1/s7/fuller/,1480001428.958,WS_Cur_Mode,8,WS_Cur_Prog,1,WS_Cur_State,128,WS_Not_Of_Fail_Code,0,KRO_First_Fault_M_Nu,0,KRO_First_Fault_S_Nu,0,WS_Pointer_Code,20002810,KRO_Last_Warn_M_Num,2810,KRO_Last_Warn_S_Num,2000,KRO_Prod_Typ,1050,KRO_Operating_Hours,4555,WS_Pack_Media_Type,33558528,WS_Tot_Packages,33558528,KRO_Check1_DivCnt_1,29,KRO_Check1_DivCnt_2,0,KRO_Check1_DivCnt_3,0,KRO_Check1_DivCnt_4,0,KRO_Check1_ErrCnt_1,0,KRO_Check1_ErrCnt_2,0,KRO_Check1_ErrCnt_3,0,KRO_Check1_ErrCnt_4,0,KRO_Check1_ErrCnt_5,11,KRO_Check1_ErrCnt_6,1,KRO_Check1_ErrCnt_7,0,KRO_Check1_ErrCnt_8,1,KRO_Check1_ErrCnt_9,1,KRO_Check1_ErrCnt_10,0,KRO_Check1_ErrCnt_11,21,KRO_Check1_ErrCnt_12,0,KRO_Check1_ErrCnt_13,0,KRO_Check1_ErrCnt_14,0,KRO_Check1_ErrCnt_15,0,KRO_Check1_ErrCnt_16,0,KRO_Check1_ErrCnt_17,0,KRO_Check1_ErrCnt_18,0,KRO_Check1_ErrCnt_19,0,KRO_Check1_ErrCnt_20,0,KRO_Check1_ErrCnt_21,0,KRO_Check1_ErrCnt_22,0,KRO_Check1_ErrCnt_23,0,KRO_Check1_Tot_Btl,39124,KRO_Check1_Sp_1,0,KRO_Check1_Sp_2,0,KRO_Check1_Sp_3,0,KRO_Check1_Sp_4,0,KRO_Check1_Sp_5,0,WS_Prog_Step,33558528,WS_Cur_Mach_Spd,54499,WS_Mach_Design_Spd,54499,WS_Bottle_Type,0,WS_Press_Bottling,4.03797721862793,WS_Temp_Product,19.76453971862793,KRO_Fill_Level,130.56207275390625,KRO_Press_Prod_In,5.03797721862793,WS_Tot_Bottles,41169,WS_Bad_Packages,33558528
```

### Packet 5
```
[{"bn":"amb1/s7/packer/","bt":1480001429.179},{"n":"WS_Cur_Mode","v":8},{"n":"WS_Cur_Prog","v":1},{"n":"WS_Cur_State","v":128},{"n":"WS_Not_Of_Fail_Code","v":0},{"n":"KRO_First_Fault_M_Nu","v":0},{"n":"KRO_First_Fault_S_Nu","v":0},{"n":"WS_Pointer_Code","v":125001055},{"n":"KRO_Last_Warn_M_Num","v":1055},{"n":"KRO_Last_Warn_S_Num","v":12500},{"n":"KRO_Prod_Typ","v":0},{"n":"KRO_Operating_Hours","v":3362},{"n":"WS_Mach_Design_Spd","v":180}]
```
Converted String
```
5,amb1/s7/packer/,1480001429.179,WS_Cur_Mode,8,WS_Cur_Prog,1,WS_Cur_State,128,WS_Not_Of_Fail_Code,0,KRO_First_Fault_M_Nu,0,KRO_First_Fault_S_Nu,0,WS_Pointer_Code,125001055,KRO_Last_Warn_M_Num,1055,KRO_Last_Warn_S_Num,12500,KRO_Prod_Typ,0,KRO_Operating_Hours,3362,WS_Mach_Design_Spd,180
```

### Packet 6
```
[{"bn":"amb1/s7/palletierer/","bt":1480001428.464},{"n":"WS_Cur_Mode","v":8},{"n":"WS_Cur_Prog","v":1},{"n":"WS_Cur_State","v":128},{"n":"WS_Not_Of_Fail_Code","v":0},{"n":"KRO_First_Fault_M_Nu","v":0},{"n":"KRO_First_Fault_S_Nu","v":0},{"n":"WS_Pointer_Code","v":110001417},{"n":"KRO_Last_Warn_M_Num","v":1417},{"n":"KRO_Last_Warn_S_Num","v":11000},{"n":"KRO_Prod_Typ","v":1031},{"n":"KRO_Operating_Hours","v":3635},{"n":"WS_Prog_Step","v":0},{"n":"WS_S88_State","v":0},{"n":"KRO_Energy_State","v":0},{"n":"KRO_Temp_Prod_Out","v":0},{"n":"KRO_Temp_Steam_1","v":0},{"n":"KRO_Temp_Steam_2","v":0},{"n":"KRO_Temp_Steam_3","v":0},{"n":"KRO_Temp_Steam_4","v":0},{"n":"KRO_Temp_Steam_5","v":0},{"n":"KRO_Press_Prod_Tank","v":0},{"n":"KRO_Press_CIP","v":0},{"n":"KRO_Diff_Pr_Prod_Ta","v":0}]
```
Converted String
```
6,amb1/s7/palletierer/,1480001428.464,WS_Cur_Mode,8,WS_Cur_Prog,1,WS_Cur_State,128,WS_Not_Of_Fail_Code,0,KRO_First_Fault_M_Nu,0,KRO_First_Fault_S_Nu,0,WS_Pointer_Code,110001417,KRO_Last_Warn_M_Num,1417,KRO_Last_Warn_S_Num,11000,KRO_Prod_Typ,1031,KRO_Operating_Hours,3635,WS_Prog_Step,0,WS_S88_State,0,KRO_Energy_State,0,KRO_Temp_Prod_Out,0,KRO_Temp_Steam_1,0,KRO_Temp_Steam_2,0,KRO_Temp_Steam_3,0,KRO_Temp_Steam_4,0,KRO_Temp_Steam_5,0,KRO_Press_Prod_Tank,0,KRO_Press_CIP,0,KRO_Diff_Pr_Prod_Ta,0
```

### Packet 7
```
{"deviceId":"1543e78e-0d1b-418e-86a2-1a21c14376db","readings":[{"meaning":"tem1","value":-17.69}],"received":1479907325783}
```
Converted String
```
7,1543e78e-0d1b-418e-86a2-1a21c14376db,,tem1,-17.69,1479907325783
```

### Packet 8
```
8,19593fd3-feeb-477d-b976-a0b7926c8d5e,,,acceleration,,0.017,0.022,-0.983,1479907331468
```
Converted String
```
{"deviceId":"19593fd3-feeb-477d-b976-a0b7926c8d5e","readings":[{"path":"","meaning":"acceleration","value":{"x":0.017,"y":0.022,"z":-0.983}}],"received":1479907331468}
```

### Packet 9
```
{"deviceId":"4a544aa3-4176-4437-93e7-93f4e07e6ffb","readings":[{"path":"main","meaning":"temperature","value":23.8329},{"path":"main","meaning":"humidity","value":18.3},{"path":"main","meaning":"luminosity","value":0},{"path":"main","meaning":"motion","value":0},{"path":"main","meaning":"audio","value":78.151112275684},{"path":"main","meaning":"presence","value":false},{"path":"main","meaning":"firmwareVersion","value":"1.1.0"}],"received":1479907322057}
```
Converted String
```
9,4a544aa3-4176-4437-93e7-93f4e07e6ffb,,main,temperature,23.8329,main,humidity,18.3,main,luminosity,0,main,motion,0,main,audio,78.151112275684,main,presence,false,main,firmwareVersion,1.1.0,1479907322057
```

### Packet 10
```
{"deviceId":"6d3ae3fe-0513-47f6-bad9-89c1b55fa024","readings":[{"path":"","meaning":"temperature","value":22.308}],"received":1479907316961}
```
Converted String
```
10,6d3ae3fe-0513-47f6-bad9-89c1b55fa024,,,temperature,22.308,1479907316961
```

### Packet 11
```
{"deviceId":"694dfd88-ed73-4a44-a839-b69b5228ad32","readings":[{"path":"total","meaning":"Current","value":"0.057"}],"received":1479907325973}
```
Converted String
```
11,694dfd88-ed73-4a44-a839-b69b5228ad32,,total,Current,0.057,1479907325973
```

### Packet 1
```
```
Converted String
```
```

## Objectives

The purpose of completing this test is to show us **how you approach and solve problems**.

It should be possible to complete this test in 2-3 hours.
If you would like to invest more time into it, that's also fine :)

### Expectations

- **State your assumptions** - Anywhere you feel that the requirements are unclear please make
an assumption and document that assumption.
- **Describe Trade-offs** - When you're making a decision about using one design/approach vs. another
try to make a quick note about why you made the choice you did.
- **Provide tests** - You should provide unit tests for the code that you write. The choice of
testing tools is up to you.
- **Updates and refactoring** - Some parts of the code might be outdated or broken. Feel free to fix it.

## Requirements

This system simulates a client sending sensor readings to a remote server.
We would like you to imagine that the client and server are separated by a connection with limited bandwidth.
Please make an effort to minimize the number of bytes being sent between the client and server.
Messages don't need to be received in real-time, but try to keep latency below 2 seconds for any given message.

Please keep in mind that we are much more interested in seeing a well-designed and well-tested
solution than we are in getting the absolute best data compression.  

You are being provided with a basic framework of both the client and server.
It includes a sample implementation using HTTP POSTs.

The example works, but we think you can do better!
Modify or replace the provided implementation (don't modify the existing file-reading and event emitting logic).

### Client

The provided code will read the sensor readings from a file and provide them at random intervals
(between 0 and 1000ms). You job is to handle these messages and send them in an efficient manner
to the server. Make your changes in the `sender/transmit.js` file.

### Server

Please print the received messages to `STDOUT` as in the example.
If you have other things you want to output please use `STDERR`.

Make your changes in the `receiver/index.js` file.

## Test Script

We have provided a `bash` script for doing acceptance testing. It will run both the client and
server. It captures the output of the server, sorts it and then compares it to the input. If they
are the same the test passes. This should help to evaluate your solution.
