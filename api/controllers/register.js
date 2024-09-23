export const register = async (req,res)=>{
    try {
        res.status(201).json({
            data : "hello"
        })
    } catch (error) {
        res.status(error.status || 500).json({
            error : error.message
        })
    }
}