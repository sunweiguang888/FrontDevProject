var template = require('tmodjs-loader/runtime');

template.helper('dateFormat', function (timestamp, pattern) {
	/**
	 * 时间格式化
	 * @param date 日期对象|时间戳数字|时间戳字符串
	 * @param format 格式化字符串
	 * @returns {String}
	 * Demo: dateFormat(new Date(), "yyyy-MM-dd HH:mm:ss:SSS);
	 */
	var oneTo2Digits = function(num){
		var num = new String(num);
		if(num.length == 1){
			return "0" + num;
		}
		return num;
	}
	return (function(date, format) {
		if(date instanceof Date){
		}else if(typeof date === 'number'){
			date = new Date(date);
		}else if(Object.prototype.toString.call(date) === '[object String]'){
			date = new Date(parseInt(date));
		}else{
			return "";
		}
		if(!format){
			format = "yyyy-MM-dd HH:mm:ss";
		}
		var year = new String(date.getFullYear());
		var month = oneTo2Digits(new String(date.getMonth() + 1));
		var dat = oneTo2Digits(new String(date.getDate()));
		var hour = oneTo2Digits(new String(date.getHours()));
		var minute = oneTo2Digits(new String(date.getMinutes()));
		var second = oneTo2Digits(new String(date.getSeconds()));
		var milliSeconds = new String(date.getMilliseconds());
		format = format.replace(/yyyy/g, year).replace(/yyy/g, year.substr(-3)).replace(/yy/g, year.substr(-2)).replace(/y/g, year.substr(-1));
		format = format.replace(/MM/g, month).replace(/M/g, month.substr(-1));
		format = format.replace(/dd/g, dat).replace(/d/g, dat.substr(-1));
		format = format.replace(/HH/g, hour).replace(/H/g, hour.substr(-1));
		format = format.replace(/mm/g, minute).replace(/m/g, minute.substr(-1));
		format = format.replace(/ss/g, second).replace(/s/g, second.substr(-1));
		format = format.replace(/SSS/g, milliSeconds).replace(/SS/g, month.substr(-2)).replace(/S/g, milliSeconds.substr(-1));
		return format;
	})(timestamp, pattern);
});

module.exports = template;
