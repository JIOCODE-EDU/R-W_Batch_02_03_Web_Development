import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  // Form Data (Controlled Form))

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    country: "",
    agreeTerms: false,
  });

  // error
  const [errors, setErrors] = useState({});

  console.log(errors);
  

  // data id retrive htmlFor editing data
  const [editId, setEditId] = useState(null);

  // Data State
  const [records, setRecords] = useState([]);

  // UI state

  // data searching

  const [searchTerm, setSearchTerm] = useState("");

  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "abc",
  });

  // pagination
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 5;

  useEffect(() => {
    if (typeof window !== undefined) {
      const saved = localStorage.getItem("crud_users");
      if (saved) {
        setRecords(JSON.parse(saved));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem("crud_users", JSON.stringify(records));
    }
  }, [records]);

  // local storage
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // error clear onchange

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {

    const newErrors = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 character";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email Format.";
    }

    if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        formData.password,
      ) ||
      formData.password.length < 6
    ) {
      newErrors.password = "Password must be at least 6 character";
    }

    if (!/^\+?[1-9][0-9]{7,14}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digit.";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required.";
    }

    if (!formData.country) {
      newErrors.country = "country is required.";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "you must agree to terms.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (editingId) {
      setRecords(prev => prev.map(r => r.id === editingId ? { ...formData, id: editingId } : r));
      setEditingId(null);
    } else {
      const newRecord = { ...formData, id: Date.now().toString(), createdAt: new Date().toLocaleString() };
      setRecords(prev => [...prev, newRecord]);

       setFormData({ name: '', email: '', password: '', phone: '', gender: '', category: '', agreeTerms: false });
      setErrors({});
    }
  }

  return (
    <>
      <div className="container mx-auto grid grid-cols-2">
        <div className="flex justify-center items-center h-screen">
          <form
            className="max-w-md mx-auto w-1/2 bg-blue-300 p-6 rounded-2xl"
            onSubmit={handleSubmit}
          >
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_text"
                id="floating_text"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required=""
                onChange={handleChange}
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm text-body duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Name
              </label>
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required=""
                onChange={handleChange}
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm text-body duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email address
              </label>
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required=""
                onChange={handleChange}
              />
              <label
                htmlFor="floating_password"
                className="absolute text-sm text-body duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Password
              </label>
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                  placeholder=" "
                  required=""
                  onChange={handleChange}
                />
                <label
                  htmlFor="floating_phone"
                  className="absolute text-sm text-body duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Phone number
                </label>
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>
              <div className="mb-4">
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="countries"
                    className="block mb-2.5 text-sm font-medium text-heading"
                  >
                    Gender
                  </label>
                  <input
                    id="country-option-2"
                    type="radio"
                    name="country"
                    defaultValue="Germany"
                    className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="country-option-2"
                    className="select-none ms-2 text-sm font-medium text-heading"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="country-option-2"
                    type="radio"
                    name="countries"
                    defaultValue="Germany"
                    className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="country-option-2"
                    className="select-none ms-2 text-sm font-medium text-heading"
                  >
                    Female
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="country-option-3"
                    type="radio"
                    name="countries"
                    defaultValue="Spain"
                    className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="country-option-3"
                    className="select-none ms-2 text-sm font-medium text-heading"
                  >
                    Other
                  </label>
                </div>
                {errors.gender && (
                  <div className="invalid-feedback">{errors.gender}</div>
                )}
              </div>
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2.5 text-sm font-medium text-heading"
                >
                  Select an option
                </label>
                <select
                  id="countries"
                  className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                  onChange={handleChange}
                >
                  <option defaultValue={"Choose a country"}>
                    Choose a country
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                   {errors.countries && (
                    <div className="invalid-feedback">{errors.countries}</div>
                  )}
              </div>
            </div>
            <div className="flex items-center mb-4">
              <input
                checked
                id="checkbox-1"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                onChange={handleChange}
              />
              <label
                htmlFor="checkbox-1"
                className="ms-2 text-sm font-medium text-heading select-none"
              >
                I agree to the{" "}
                <a href="#" className="text-fg-brand hover:underline">
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-500 w-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Form Data Table with searching , sorting and Pagination */}

        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="bg-neutral-secondary-soft border-b border-default">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Password
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Countries
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td></td>
                <td></td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-fg-brand hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
