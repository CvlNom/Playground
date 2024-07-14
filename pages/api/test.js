export default function handler(req, res) {

    //if문으로 post 요청과 get 요청을 분기하여 응답 가능

    return res.status(200).json('Done')
}