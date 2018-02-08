<template>
    <f7-popup :id="'sharepopup' + product.id" style="overflow: hidden;">
    <f7-nav-right style="text-align:right;" >
		<f7-link :close-popup="true">X</f7-link>
	</f7-nav-right>
        <p style=" position: absolute; top: -7px;left: 0;font-size: 18px; width: 100%;z-index: -1; text-align: center;">Share on</p>
    
    <social-sharing url="https://nespresso-15ba4.firebaseapp.com/"
                      title="Nespresso"
                      hashtags="nespresso"
                      inline-template>
  <div>
      <network class="social-icon" network="email">
          <i class="fa fa-envelope"></i> 
      </network>
      <network class="social-icon" network="facebook">
        <i class="fa fa-facebook"></i>
      </network>
      <network class="social-icon" network="skype">
        <i class="fa fa-skype"></i> 
      </network>
      <network class="social-icon" network="sms">
        <i class="fa fa-commenting-o"></i>
      </network>
      <network class="social-icon" network="twitter">
        <i class="fa fa-twitter"></i>
      </network>
      <network class="social-icon" network="whatsapp">
        <i class="fa fa-whatsapp"></i>
      </network>
  </div>
</social-sharing>
    </f7-popup>
</template>

<script>
export default {
props:['product'],
  data() {
    return {
  
		};
	}
};
</script>
   

<style>
.social-icon{
width: 27px;
    height: 27px;
    display: inline-block;
    font-size: 34px;
    margin-left: 10px;
    margin-top: 29px;
    margin-right: 10px;
}
    
</style>