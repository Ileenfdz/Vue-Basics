export let inputPassword = Vue.component('input-password', {
    template: /* html */
        `<div>
            <h2>{{title}}</h2>
            <div class="d-flex">
                <input
                    type="password" 
                    class="form-control" 
                    placeholder="Enter your password"
                >
                <button 
                    class="btn btn-primary"
                >show password</button>    
            </div>
            <hr class="mb-4">
        </div>`,
    data() {
        return {
            title: 'Show the password',
        }
    },
    methods: {
        
    },
})