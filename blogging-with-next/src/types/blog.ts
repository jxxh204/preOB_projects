
type ParamsType = {
    params:{
      id:string
    }
  }
  type PostDataType = {
    postData:DataType
  }
  type DataType = {
      title:string;
      id:string;
      data:any;
      contentHtml:any
      description:string
  }
  type GetPostDataType = {
    id:string
    contentHtml:string
  }