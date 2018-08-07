export const itemIcon ={
    methods:{
        itemIcon(iconURL){
            return 'https://wow.zamimg.com/images/wow/icons/medium/' + iconURL + '.jpg';
        }
    }
}

export const getIcon = {
    data(){
        return{
            imageSizes:{small:18, medium:36, large:56},
        }
    },
    methods:{
        getIcon(filename, size){
            return 'https://render-eu.worldofwarcraft.com/icons/'+this.imageSizes[size]+'/'+filename+'.jpg';
        },
    }
}