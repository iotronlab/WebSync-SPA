<template>
  <v-stepper v-model="active" vertical>
    <v-stepper-step :complete="active > 1" step="1">  Enter email </v-stepper-step>
    <v-stepper-content step="1">
        <div class="px-4 py-1" >
            <v-form  id="sign-up-form" ref="sign-up-form"  method="post" @submit.prevent="getOtp">
                 <v-text-field
                   prepend-inner-icon="email"
                   placeholder="Enter your email"
                   name="email"
                   type="email"
                   v-model="email"
                   solo
                   required
                   outlined
                   >
                   </v-text-field>
                  <v-btn color="primary" rounded type="submit" >Send OTP</v-btn>
           </v-form>
           
        </div>
    </v-stepper-content>

    <v-stepper-step :complete="active > 2" step="2">Enter OTP</v-stepper-step>
	{{ message }}
    <v-stepper-content step="2">
        <div class="px-4 py-1" >
            <v-form  id="form-two"  method="post" @submit.prevent="validateOtp">
                           <v-text-field
                            prepend-inner-icon=""
                            label=""
                            placeholder=" "
                            type="text"
                            v-model="otp"
                            autocomplete="off"
                            required
                            outlined
                            solo
                            >
                            </v-text-field>   
							<v-btn color="primary"  type="submit" rounded>Confirm</v-btn>
           				 <v-btn  color="primary" rounded outlined @click.prevent="resendOtp">Resend OTP</v-btn>
                            
            </v-form>
        </div>
    </v-stepper-content>

    <v-stepper-step :complete="active > 3" step="3">Enter Details</v-stepper-step>
    <v-stepper-content step="3">
        <div color="" class="px-4 py-1">  
            <v-form id="form-three"  ref="form-three" method="post" @submit.prevent="register">
                         
					<v-text-field
						prepend-inner-icon="person"
						label="Name"
						placeholder="Name "
						name="name"
						type="text"
						v-model="name"
						autocomplete="off"
						required
						outlined
						solo
					>
					</v-text-field>

					<v-text-field id="password"
						prepend-inner-icon="lock"
						v-model="password"
						:append-icon="show ? 'visibility' : 'visibility_off'"
						:type="show ? 'text' : 'password'"
						label="Password"
						name="password"
						placeholder="Password"
						hint="At least 8 characters"
						autocomplete="off"
						@click:append="show = !show"
						outlined
						dense
						solo
					>
					</v-text-field>
					<v-text-field id="cnfpassword"
						prepend-inner-icon="lock"
						v-model="confirm_password"
						:append-icon="show ? 'visibility' : 'visibility_off'"
						:type="show ? 'text' : 'password'"
						label="Confirm Password"
						name="password"
						placeholder="Confirm Password "
						hint="At least 8 characters"
						autocomplete="off"
						@click:append="show = !show"
						outlined
						dense
						solo
					
					>
					</v-text-field>
					<v-btn color="primary" type="submit" form="form-three" rounded >Sign Up</v-btn>
					<v-btn color="primary" rounded outlined>Cancel</v-btn>
      			</v-form>

      		</div>
    	</v-stepper-content>
    </v-stepper>

    
</template>
<script>
  export default {
    data () {
      return {
        active: 1,
        email:'',
        otp:'',
        name:'',
        password:'',
        confirm_password:'',
        message: ''
      }
	},
	methods: {
		async getOtp() {
			const response = await this.$axios.post('/otpverify',{
				email: this.email
			})
			if(response.data.success)
			{
				this.message=response.data.message
				this.active=2
			}	
		},
		async validateOtp() {
			const response = await this.$axios.post('/otpvalidate',{
				email: this.email,
				otp: this.otp
			})
			if(response.data.success)
			{
				// Otp is validated
				this.message= ''
				this.active=3
			}
			else
			{
				// Otp is wrong
				this.message=response.data.message
			}
		},
		async resendOtp() {
			const response = await this.$axios.post('/otpverify',{
				email: this.email
			})
			if(response.data.success)
			{
				this.message="OTP has been send again"
			}
		},
		async register() {
			console.log('register user')
			const response = await this.$axios.post('/register',{
				email: this.email,
				password: this.password,
				name: this.name,
				password_confirmation: this.confirm_password
			})
			if(response.data.accessToken!=null && response.data.accessToken!=undefined)
			{
				this.$emit('success')
			}
		}
	}
}
</script>