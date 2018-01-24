function metricConverter([arg1, arg2, arg3]) {
	let num = Number(arg1);
	let InputUnit = arg2;
	let OutputUnit = arg3;

	let meter = 0;

	if (InputUnit == "m" ) {
		meter = num;
	} else if (InputUnit == "mm") {
		meter = num / 1000;
	} else if (InputUnit == "cm") {
		meter = num / 100;
	} else if (InputUnit == "mi") {
		meter = num / 0.000621371192;
	} else if (InputUnit == "in") {
		meter = num / 39.3700787;
	} else if (InputUnit == "km") {
		meter = num / 0.001;
	} else if (InputUnit == "ft") {
		meter = num / 3.2808399;
	} else if (InputUnit == "yd") {
		meter = num / 1.0936133;
	}


	if (OutputUnit == "m") {
		meter = meter * 1;
	} else if (OutputUnit == "mm") {
		meter = meter * 1000;
	} else if (OutputUnit == "cm") {
		meter = meter * 100;
	} else if (OutputUnit == "mi") {
		meter = meter * 0.000621371192;
	} else if (OutputUnit == "in") {
		meter = meter * 39.3700787;
	} else if (OutputUnit == "km") {
		meter = meter * 0.001;
	} else if (OutputUnit == "ft") {
		meter = meter * 3.2808399;
	} else if (OutputUnit == "yd") {
		meter = meter * 1.0936133;
	}

	console.log(meter.toFixed(8) + " " + OutputUnit);
}

metricConverter(["450", "yd", "km"])