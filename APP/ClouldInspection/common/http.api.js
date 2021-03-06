// 后端的服务器地址
// let BACKEND_BASE_URL = 'http://localhost:8086'
let BACKEND_BASE_URL = 'http://101.201.64.102:8890'

const install = (Vue, vm) => {

	//------------------------------------------------------
	// User
	// 登录
	let login =  (username, pwd) => vm.$u.get('/user/login', {id: username,pwd: pwd,});
	// 获取用户头像
	let userAvatar = (userName) => BACKEND_BASE_URL + '/static/avatar/' + userName + '.png'
	
	//------------------------------------------------------
	// Damage
	// 损伤上报功能
	let postDamage = (location, type, postId, description) => vm.$u.post('/damage/post', 
		{location:location, type:type, postId:postId, source:'1',description:description})
	// 删除损伤图片
	let removeDamagePicture = (filename) => vm.$u.delete('/damage_image/remove', {filename: filename})
	// 获取现在有的损伤列表
	let getDamageList = (pn, limit) => vm.$u.get('/damage/listDamageUpToNow', {pn:pn, limit:limit})
	// 获取指定损伤的图片
	let getDamagePicture = (id) => vm.$u.get('/damage_image/get', {id: id})
	// 获取指定损伤的详细信息
	let getDamageDetail = (id) => vm.$u.get('/damage/getDamageById', {damageId: id})
	
	//------------------------------------------------------
	// 获取图片
	let getPicture = (filename) => BACKEND_BASE_URL + '/static/damage_picture/' + filename
	
	//------------------------------------------------------
	// Task
	// 接收任务
	let acquireTask = (userId, damageId) => vm.$u.post('/task/acquire', {damageid: damageId, id: userId})
	// 获取用户正在进行的任务
	let taskOnGoing = (userId, page, limit) => vm.$u.get('/task/user/acquire', {id: userId, pn: page, limit: limit}) 
	// 根据id获取任务
	let getTaskProcess = (taskId) => vm.$u.get('/task/process', {taskid: taskId})
	// 任务延迟
	let delayTask = (taskId, time, desc) => vm.$u.post('/task/delay', {id: taskId, delay:time, description: desc})
	// 提交任务
	let submitTask = (taskId, desc = '') => vm.$u.post('/task/submit', {id: taskId, description: desc})
	// 取消任务
	let cancelTask = (taskId, reason = '') => vm.$u.post('/task/cancel', {taskid:taskId, desc:reason})
	// 获取正在审核的任务
	let listTaskChecking = (userId, page, limit) => vm.$u.get('/task/user/checking', {id: userId, pn: page, limit: limit}) 
	// 获取用户今日审核完成的任务
	let listCompleteTaskToday = (userId, page, limit) => vm.$u.get('/task/user/complete/today', {id: userId, pn: page, limit: limit})
	// 获取用户全部审核完成的任务
	let listCompleteTaskAll = (userId, page, limit) => vm.$u.get('/task/user/complete/all', {id: userId, pn: page, limit: limit})
	
	
	
	vm.$u.api = {
		// Uer
		login, userAvatar, 
		// Damage
		removeDamagePicture, postDamage, getDamageList, getDamagePicture, getDamageDetail,
		// Picture
		getPicture,
		// Task
		acquireTask, taskOnGoing, getTaskProcess, submitTask, cancelTask, delayTask, listTaskChecking,
		listCompleteTaskToday, listCompleteTaskAll
	};
}

export default {
	install
}