const initState = {
	userInfo: [],
}

export default function login(state = initState, action) {
	switch (action.type) {
		case 'USER_LOGIN':
			console.log(action.payload, 'action_login');
			return 1

		default:
			return state
	}
}