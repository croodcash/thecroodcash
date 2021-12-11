
const routes={
    HOME:{
        to: "/",
        text: "Home"
    },
    ABOUT:{
        to: "/About",
        text: "About"
    },
    CONTACT:{
        to: "/Contact",
        text: "Contact"
    }
};
export const backend={
    sendEmail:"https://croodcash-be.herokuapp.com/api/v1/send-email"
}

export default routes;