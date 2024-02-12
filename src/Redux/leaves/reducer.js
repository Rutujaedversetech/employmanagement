import {
    // ADD_PRODUCT_FAILURE,
    // ADD_PRODUCT_REQUEST,
    // ADD_PRODUCT_SUCCESS,
    DELETE_OPPOINTMENT_FAILURE,
    DELETE_OPPOINTMENT_REQUEST,
    DELETE_OPPOINTMENT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    GET_ALL_PATIENTDETAILS_FAILURE,
    GET_ALL_PATIENTDETAILS_REQUEST,
    GET_ALL_PATIENTDETAILS_SUCCESS,
    GET_ALL_PRODUCTS_FAILURE,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
   // GET_AUTHOR_PRODUCT_FAILURE,
    GET_AUTHOR_PRODUCT_FAILURE3,
    //GET_AUTHOR_PRODUCT_REQUEST,
    GET_AUTHOR_PRODUCT_REQUEST1,
   // GET_AUTHOR_PRODUCT_SUCCESS,
    GET_AUTHOR_PRODUCT_SUCCESS2,
    GET_EMP_ASSET_REQUEST1,
    GET_EMP_ASSET_FAILURE3,
    GET_EMP_ASSET_SUCCESS2,
    UPDATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_FAILURE1,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_REQUEST1,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_SUCCESS1,
    GET_EMP_LEAVE_REQUEST,
    GET_EMP_LEAVE_SUCCESS,
    GET_EMP_LEAVE_FAILURE,
    ADD_LEAVE_REQUEST,
    ADD_LEAVE_SUCCESS,
    ADD_LEAVE_FAILURE,
    GET_SINGLE_LEAVE_REQUEST,
    GET_SINGLE_LEAVE_SUCCESS,
    GET_SINGLE_LEAVE_FAILURE,
    DELETE_LEAVE_REQUEST,
    DELETE_LEAVE_SUCCESS,
    DELETE_LEAVE_FAILURE,
    UPDATE_LEAVE_REQUEST,
    UPDATE_LEAVE_SUCCESS,
    UPDATE_LEAVE_FAILURE,

  } from "./actionTypes";
  
  const initialState = {
    AllProducts: { loading: false, error: false },
    Product: { loading: false, error: false },
    AddProduct: { loading: false, error: false ,message:''},
    UpdateProduct: { loading: false, error: false,message:"" },
    DeleteProduct: { loading: false, error: false },
    Deleteoppointment: { loading: false, error: false },

    data: [],
    singleData: {},
    userDetails:{},
    totalPage:'',
    TotalData:''
  };
  
  export default function PatientdetailsReducer(
    state = initialState,
    { type, payload }
  ) {
   // console.log('blog',payload,state);

    switch (type) {
      // case GET_ALL_PATIENTDETAILS_REQUEST:
      //   return {
      //     ...state,
      //     AllProducts: { loading: true, error: false },
      //     AddProduct: { loading: false, error: false ,message:''},

      //   };
      // case GET_ALL_PATIENTDETAILS_SUCCESS:
      //   return {
      //     ...state,
      //     AllProducts: { loading: false, error: false },
      //     AddProduct: { loading: false, error: false ,message:''},

      //     // data:[...payload],
      //     data:[...payload.paginatedData],
      //     totalPage:payload.totalPages,
      //     TotalData:payload.TotalData
      //   };
  
      // case GET_ALL_PATIENTDETAILS_FAILURE:
      //   return {
      //     ...state,
      //     AllProducts: { loading: false, error: true },
      //     AddProduct: { loading: false, error: true ,message:''},

      //   };
  


        case GET_EMP_LEAVE_REQUEST:
          return {
            ...state,
            AllProducts: { loading: true, error: false },
          };
        case  GET_EMP_LEAVE_SUCCESS:
          return {
            ...state,
            AllProducts: { loading: false, error: false },
            data: [...payload],
          };
    
        case  GET_EMP_LEAVE_FAILURE:
          return {
            ...state,
            AllProducts: { loading: false, error: true },
          };
    


        //   case GET_AUTHOR_PRODUCT_REQUEST1:
        //   return {
        //     ...state,
        //     AllProducts: { loading: true, error: false },
        //   };
        // case  GET_AUTHOR_PRODUCT_SUCCESS2:
        //   return {
        //     ...state,
        //     AllProducts: { loading: false, error: false },
        //     data: [...payload],
        //   };
    
        // case  GET_AUTHOR_PRODUCT_FAILURE3:
        //   return {
        //     ...state,
        //     AllProducts: { loading: false, error: true },
        //   };
    





      case GET_SINGLE_LEAVE_REQUEST:
        return {
          ...state,
          Product: { loading: true, error: false },
        };
      case GET_SINGLE_LEAVE_SUCCESS:
        return {
          ...state,
          Product: {
            loading: false,
            error: false,
          },
          singleData: payload,
         // data: [...payload],

        };
  
      case GET_SINGLE_LEAVE_FAILURE:
        return {
          ...state,
          Product: { loading: false, error: true },
        };
  
      case ADD_LEAVE_REQUEST:
        return {
          ...state,
          AddProduct: { loading: true, error: false,message:'' },
        };
      case ADD_LEAVE_SUCCESS:

        return {
          ...state,
          AddProduct: { loading: false, error: false,message:'asset added'  },
          data: [...state.data, payload.data.response],
        };
  
      case ADD_LEAVE_FAILURE:
        return {
          ...state,
          AddProduct: { loading: false, error: true,message:'' },
        };
  
      case UPDATE_LEAVE_REQUEST:

        return {
          ...state,
          UpdateProduct: { loading: true, error: false,message:'' },
        };
      case UPDATE_LEAVE_SUCCESS:
        return {
          ...state,
          UpdateProduct: { loading: false, error: false,message:"data updated" },
          data: state.data.map((item) =>
          //console.log('item',item)
            item.attendance_id == payload.attendance_id ? payload : item
          ),
        };
  
      case UPDATE_LEAVE_FAILURE:
        return {
          ...state,
          UpdateProduct: { loading: false, error: true,message:'' },
        };

      //   case UPDATE_PRODUCT_REQUEST1:

      //   return {
      //     ...state,
      //     UpdateProduct: { loading: true, error: false,message:'' },
      //   };
      // case UPDATE_PRODUCT_SUCCESS1:
      //   return {
      //     ...state,
      //     UpdateProduct: { loading: false, error: false,message:"data updated1" },
      //     data: state.data.map((item) =>
      //     //console.log('item',item)
      //       item._id == payload._id ? payload : item
      //     ),
      //   };
  
      // case UPDATE_PRODUCT_FAILURE1:





  
      case DELETE_LEAVE_REQUEST:
        return {
          ...state,
          DeleteProduct: { loading: true, error: false },
        };
      case DELETE_LEAVE_SUCCESS:
        return {
          ...state,
          DeleteProduct: { loading: false, error: false },
          data: state.data.filter((item) => item.attendance_id !== payload),
        };
  
      case DELETE_LEAVE_FAILURE:
        return {
          ...state,
          DeleteProduct: { loading: false, error: true },
        };

      //   case DELETE_OPPOINTMENT_REQUEST:
      //   return {
      //     ...state,
      //     Deleteoppointment: { loading: true, error: false },
      //   };
      // case DELETE_OPPOINTMENT_SUCCESS:
      //   return {
      //     ...state,
      //     Deleteoppointment: { loading: false, error: false },
      //     data: state.data.filter((item) => item._id !== payload),
      //   };
  
      // case DELETE_OPPOINTMENT_FAILURE:
        return {
          ...state,
          Deleteoppointment: { loading: false, error: true },
        };
  
      default:
        return state;
    }
  }