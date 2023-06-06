import { DateTime } from "luxon";

var overrideZone = DateTime.fromISO("2017-05-15T09:10:23", { zone: "Europe/Istanbul" });

overrideZone.zoneName; //=> 'Europe/Istanbul'
overrideZone.toString(); //=> '2017-05-15T09:10:23.000+02:00'

DateTime.fromISO("2017-05-15T09:10:23", { zone: "Europe/Istanbul" });
