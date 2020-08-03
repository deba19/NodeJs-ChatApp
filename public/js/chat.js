const socket=io()
// socket.on('countUpdated',(count)=>{
//     console.log('The count has been updated! ',count)
// })
// document.querySelector('#increment').addEventListener('click',()=>{
//     console.log('Clicked')
//     socket.emit('increment')

// })
socket.on('message',(message)=>{
    console.log(message)
})
document.querySelector('#message-form').addEventListener('submit',(e)=>{
    e.preventDefault()

    const message=e.target.elements.message.value
    socket.emit('sendMessage',message)
})
document.querySelector('#send-location').addEventListener('click',()=>{
    if(!navigator.geolocation)
    {
        return alert('Geolocation is not supporrted by your browser')

    }
    navigator.geolocation.getCurrentPosition((position)=>{
       // console.log(position)
        socket.emit('sendLocation',{
            lalitude : position.coords.latitude,
            longitude : position.coords.longitude
        })
    })
})