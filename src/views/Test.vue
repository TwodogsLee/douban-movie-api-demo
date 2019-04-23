<template>
    <!-- This is a test page -->
    <div>
        <p>this is a test page</p>
        <div>
            <star height='15px'  :rating='7.7'></star>
        </div>
        
    </div>
</template>
<script>
import star from '@/components/RatingStar'
export default {
    components:{star}
}
</script>
<style>
</style>
