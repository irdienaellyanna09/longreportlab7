const supertest = require('supertest');
const request = supertest('http://localhost:4000');
const bcrypt = require("bcryptjs");

// const saltRounds = 10;
// let encryptedPassword;
// bcrypt.genSalt(saltRounds, function (saltError, salt) {
// 	if (saltError) {
// 	  throw saltError
// 	} else {
// 	  bcrypt.hash(userpassword, salt, function(hashError, hash) {
// 		if (hashError) {
// 		  throw hashError
// 		} else {
// 			encryptedPassword=hash;
// 			//console.log("Hash:",hash);
		  
// 		}
// 	  })
// 	}
//   })

describe('Express Route Test', function () {

	it('will return hello world', async () => {
		return request.get('/hello')
			.expect(200)
			.expect('Content-Type', /text/)
			.then(res => {
				expect(res.text).toBe('Hello and welcome');
			}); 
	})
	

	it('login successfully', async () => {
		return request
			.post('/login')
			.send({'userName': 'Erika Harvey','UserEmail':'Wayne30@gmail.com' ,'userpassword': "WEi3AhRtwHQ9ttR" })
			.expect('Content-Type', /text/)
			.expect(200).then(response => {
				expect(response.text).toEqual("login success");
			});
	});

	it('login failed', async () => {
		return request
			.post('/login')
			.send({'username': 'Erika Harvey','email':'Wayne30@gmail.com' ,'userpassword': "240700" })
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("Wrong login details");

	});
});
	

	it('register', async () => {
		return request
			.post('/register')
			.send({'userName': 'sehun','UserEmail':'oohsehun94@gmail.com' ,'userpassword': "120494" })//,encryptedPassword:encryptedPassword })
			.expect('Content-Type', /text/)
			.expect(200).then(response => {
				expect(response.text).toEqual("New user is created");
	});
});

	it('register failed', async () => {
		return request
			.post('/register')
			.send({'username': 'user48','email':'ddde@gmail.com' ,'password': "12345678"}) //,'encryptedPassword':encryptedPassword })
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("The username already exist!");
	});
});

it('delete', async () => {
	return request
		.delete('/delete')
		.send({'userName': 'Tyrone Howell','UserEmail':'Lura_Shields90@hotmail.com' ,'userpassword': "eKQ1Q4R7IZTDJfj" })//,encryptedPassword:encryptedPassword })
		.expect('Content-Type', /text/)
		.expect(200).then(response => {
			expect(response.text).toEqual("The information is delete successfully");
	});
});

// 'delete failed', async () => {
// 	return request
// 		.post('/delete')
// 		.send({'username': 'user44','email':'dddefg@gmail.com' ,'password': "240700"}) //,'encryptedPassword':encryptedPassword })
// 		.expect('Content-Type', /text/)
// 		.expect(404).then(response => {
// 			expect(response.text).toEqual("The information is invalid");
// 	});
// });

	it('update successful', async () => {
		return request
			.patch('/update')
			.send({'userName': 'Terrance Klocko IV','userpassword':"uZAX7uuy_D8bMB7"})
			//.expect('Content-Type', /text/)
			.expect(200)//.then(response => {
				//expect(response.text).toEqual("Data is updated!")
	//});
})

});