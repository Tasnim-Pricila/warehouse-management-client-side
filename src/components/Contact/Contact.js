import {
  faBusinessTime,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import Title from "../../Shared/Title/Title";
import contact from "../../images/contact.jpg";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    reset();
  };
  return (
    <>
      <Title title="Contact"> </Title>
      <div
        className="bg-cover h-[50vh] bg-no-repeat"
        style={{ backgroundImage: `url('${contact}')` }}
      ></div>
      <div
        data-aos="flip-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="80"
        className="md:w-2/3 md:mx-auto border py-12 px-8 shadow-2xl contact mx-4 -mt-[150px] mb-[50px] bg-[#f5f5f5]"
      >
        <p className="text-3xl mb-12 text-amber-700">
          Contact us for any further questions, possible projects and business
          partnerships
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
          <div>
            <div className="flex justify-between items-center text-slate-600 py-2">
              <p className="text-2xl font-semibold uppercase">
                Conatct Directly
              </p>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </div>
            <div className="bg-slate-400 h-[1px]"></div>
            <p className="mt-4 mb-1 text-slate-600">hello@vintageexotic.com</p>
            <p className="text-slate-600">+8801733333333</p>
          </div>
          <div>
            <div className="flex justify-between items-center text-slate-600 py-2">
              <p className="text-2xl font-semibold uppercase">
                VISIT OUR OFFICE
              </p>
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            </div>
            <div className="bg-slate-400 h-[1px]"></div>
            <p className="mt-4 mb-1 text-slate-600">
              Jam JAm Tower # 92 JashimUddin Road # Uttara # Dhaka-1230 #
              Bangladesh
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center text-slate-600 py-2">
              <p className="text-2xl font-semibold uppercase">WORK WITH US</p>
              <FontAwesomeIcon icon={faBusinessTime}></FontAwesomeIcon>
            </div>
            <div className="bg-slate-400 h-[1px]"></div>
            <p className="mt-4 mb-1 text-slate-600">
              Send your CV to our email:
            </p>
            <p className="text-slate-600">career@vintageexotic.com </p>
          </div>
        </div>
      </div>
      <div className="md:mx-36 border-2 bg-slate-100 mb-28 mx-4">
        <form onSubmit={handleSubmit(onSubmit)} className="md:m-24 m-16">
          <p className="text-3xl font-semibold mb-4 text-slate-800">
            Get In Touch
          </p>
          <div className="flex justify-between flex-col md:flex-row">
            {/* Name Field  */}
            <div>
              <input
                placeholder="Name"
                type="text"
                {...register("name", { required: true })}
                className="block border-slate-500 border-2 mt-6 pl-4 py-2 bg-white md:w-[300px]"
              />
              <small className="text-red-500 ">
                {errors.name?.type === "required" && "Name is required"}
              </small>
            </div>

            {/* Email Field  */}
            <div>
              <input
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
                className="block border-slate-500 border-2  pl-4 py-2 bg-white  
                             mt-6 md:w-[300px]"
              />

              <small className="text-red-500 ">
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" && "Email pattern is wrong"}
              </small>
            </div>

            {/* Phone field  */}
            <div>
              <input
                placeholder="Phone"
                type="text"
                {...register("phone", { required: true })}
                className="block border-slate-500 border-2  pl-4 py-2 bg-white 
                             mt-6 md:w-[300px]"
              />

              <small className=" text-red-500">
                {errors.phone?.type === "required" && "phone is required"}
              </small>
            </div>
          </div>

          {/* message  field  */}
          <textarea
            placeholder="Enter Your Message..."
            rows="5"
            {...register("message", { required: true })}
            className="block border-slate-500 border-2 pl-4 py-2 bg-white mt-6 w-full"
          />
          <small className=" text-red-500">
            {errors.message?.type === "required" && "Password is required"}
          </small>

          {/* Submit Button  */}
          <input
            type="submit"
            className="block bg-orange-400 font-semibold tracking-wider mt-6 px-6 py-4 uppercase text-white cursor-pointer hover:bg-orange-800 hover:duration-500"
            value="Send Message"
          />
        </form>
      </div>
    </>
  );
};

export default Contact;
