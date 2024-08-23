'use client'
import { useState } from "react";
import Header from "../_component/header";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import DropdownFilter from "../_component/dropdownFilter";
import InputJournal from "../_component/inputJournal";
import InputRadio from "../_component/inputRadio";
import { TICKERS } from "../data/MCAP28032024";
import DatePickerUi from "../_component/datePickerUi";
import { addNewJournal } from "../redux/journalSlice";

const Journal = () =>{
  const initialFormValues = {
    filterOption: "",
    timeframe: "",
    tradestatus: "",
    buyDate: "",
    sellDate: "",
    buyPrice: "",
    sellPrice: "",
    stoploss: "",
    quantity: "",
    referencelink : "",
    strategy: "",
    reason: "",
    notes: "",
  };
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formValues, setFormValues] = useState(initialFormValues);
  const dispatch = useDispatch();

  const router = useRouter();

  const validateBuyPrice = (value) => {
    if (!value.trim()) {
      return "Buy price is required";
    }

    if (!/^\d*\.?\d{0,3}$/.test(value)) {
      return "please enter numeric value";
    }
    return "";
  };

  const validateSellPrice = (value) => {
    if (!value.trim()) {
      return "Sell price is required";
    }
    if (!/^\d*\.?\d{0,3}$/.test(value)) {
      return "please enter numeric value";
    }
    return "";
  };

  const validateQuantity = (value) => {
    if (!value.trim()) {
      return "Qunatity is required";
    }

    if (!/^\d*\.?\d{0,3}$/.test(value)) {
      return "please enter numeric value";
    }

    return "";
  };

  const validateStoploss = (value) => {
    if (!value.trim()) {
      return "Stop loss is required";
    }

    if (!/^\d*\.?\d{0,3}$/.test(value)) {
      return "please enter numeric value";
    }

    return "";
  };

  const validateStrategy = (value) => {
    if (!value.trim()) {
      return "Strategy is required";
    }

    const strategyWords = value.trim().split(/\s+/);
    if (strategyWords.length > 100) {
      return "Strategy should not exceed 100 words";
    }

    return "";
  };

  const validateReason = (value) => {
    if (!value.trim()) {
      return "Reason is required";
    }
    const reason200 = value.trim().split(/\s+/);
    if (reason200.length > 200) {
      return "Reason should not exceed 200 words";
    }
    return "";
  };

  const validateNotes = (value) => {
    if (!value.trim()) {
      return "Notes is required";
    }
    const notes200 = value.trim().split(/\s+/);
    if (notes200.length > 200) {
      return "Notes should not exceed 200 words";
    }
    return "";
  };

  const validateStocks = (value) => {
    if (!value.trim()) {
      return "Stocks is required";
    }
    return "";
  };

  const validateRadioSelection = (value) => {
    if (!value) {
      return "Please select an option";
    }
    return "";
  };

  const validateDate = (value) => {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    const newdate = new Date(value);
    const formattedDate = `${newdate.getDate().toString().padStart(2, "0")}-${(
      newdate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${newdate.getFullYear()}`;

    if (!regex.test(formattedDate)) {
      return "Invalid date format. Please use DD-MM-YYYY format";
    }
    return "";
  };

  const formatDate = (datestring) => {
    let formattedDate;
    if (datestring) {
      const newdate = new Date(datestring);
      formattedDate = `${newdate.getDate().toString().padStart(2, "0")}-${(
        newdate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${newdate.getFullYear()}`;
    } else {
      formattedDate = "";
    }

    return formattedDate;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    let errorMessage = "";
    switch (id) {
      case "filterOption":
        errorMessage = validateStocks(value);
        setErrors({ ...errors, filterOption: errorMessage });
        setFormValues((prevValues) => ({ ...prevValues, filterOption: value }));
        //setFilterOption(value);
        break;

      case "buydate":
        errorMessage = validateDate(value);
        setErrors({ ...errors, buydate: errorMessage });
        setFormValues((prevValues) => ({ ...prevValues, buyDate: value }));
        //setBuyDate(value);
        break;

      case "selldate":
        errorMessage = validateDate(value);
        setErrors({ ...errors, selldate: errorMessage });
        setFormValues((prevValues) => ({ ...prevValues, sellDate: value }));
        //setSellDate(value);
        break;

      case "buyprice":
        errorMessage = validateBuyPrice(value);
        setErrors({ ...errors, buyPrice: errorMessage });
        setFormValues((prevValues) => ({ ...prevValues, buyPrice: value }));
        //setBuyPrice(value);
        break;

      case "sellprice":
        errorMessage = validateSellPrice(value);
        setErrors({ ...errors, sellPrice: errorMessage });
        setFormValues((prevValues) => ({ ...prevValues, sellPrice: value }));
        //setSellPrice(value);
        break;

      case "stoploss":
        errorMessage = validateStoploss(value);
        setErrors({ ...errors, stoploss: errorMessage });
        setFormValues((prevValues) => ({ ...prevValues, stoploss: value }));
        //setStoploss(value);
        break;

      case "quantity":
        errorMessage = validateQuantity(value);
        setErrors({ ...errors, quantity: errorMessage });
        setFormValues((prevValues) => ({ ...prevValues, quantity: value }));
        //setQuantity(value);
        break;
      case "referencelink":
        setFormValues((prevValues) => ({ ...prevValues, referencelink: value }));
        //setStrategy(value);
        break;
      case "strategy":
        errorMessage = validateStrategy(value);
        setErrors({ ...errors, strategy: errorMessage });
        setFormValues((prevValues) => ({ ...prevValues, strategy: value }));
        //setStrategy(value);
        break;
      case "reason":
        errorMessage = validateReason(value);
        setErrors({ ...errors, reason: errorMessage });
        setFormValues((prevValues) => ({ ...prevValues, reason: value }));
        //setReason(value);
        break;
      case "notes":
        errorMessage = validateNotes(value);
        setErrors({ ...errors, notes: errorMessage });
        setFormValues((prevValues) => ({ ...prevValues, notes: value }));
        //setNotes(value);
        break;
      default:
        errorMessage = validateRadioSelection(value);
        setErrors({ ...errors, timeframe: errorMessage });
        setFormValues((prevValues) => ({ ...prevValues, timeframe: value }));
        //setTimeframe(value);
        break;
    }
  };

  const handleRadioChange = (e) => {
    let errorMessage = validateRadioSelection(e.target.value);
    setErrors({ ...errors, tradestatus: errorMessage });
    setFormValues((prevValues) => ({
      ...prevValues,
      tradestatus: e.target.value,
    }));

    //setTradestatus(e.target.value);
  };

  const requiredFields = {
    Open: [
      "filterOption",
      "timeframe",
      "tradestatus",
      "buyDate",
      "buyPrice",
      "stoploss",
      "quantity",
      "strategy",
      "reason",
    ],
    Close: [
      "filterOption",
      "timeframe",
      "tradestatus",
      "buyDate",
      "buyPrice",
      "stoploss",
      "quantity",
      "strategy",
      "reason",
      "sellDate",
      "sellPrice",
    ],
  };

  const validateForm = () => {
    const newErrors = {};
    const currentRequiredFields = requiredFields[formValues.tradestatus];
    
    currentRequiredFields.forEach((key) => {
      if (!formValues[key]) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddToJournal = () => {
    //e.preventDefault();
    const formData = { ...formValues };
    
    if (formValues.tradestatus === "Open") {
      formData.sellPrice = "";
      formData.sellDate = "";
      formData.notes = "";
    }

    const formattedValues = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => {
        if (key.endsWith("Date")) {
          return [key, formatDate(value)];
        }
        return [key, value];
      })
    );

    if (validateForm()) {
      // Submit the form
      

      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const year = today.getFullYear();
      const formattedDate = `${day}-${month}-${year}`;
      const authUser = JSON.parse(localStorage.getItem('authUser'));
    
      // Update the formData with the current date
        const updatedData = {
          ...formattedValues,
          createDate: formattedDate,
          userid:authUser._id
      };
 
      dispatch(addNewJournal(updatedData));
      //dispatch(journalAction.addToJournal(formattedValues));
      setFormValues(initialFormValues);
      setErrors({});
      setSuccessMessage("Form submitted successfully!");
      setErrorMessage("");
      router.push("dashboard");
    }
  };

  return(
    <>
    <Header/>
    <section className="container my-10 mx-auto">
        <div className="mt-5 grid gap-4  sm:mt-5 sm:gap-y-10 lg:mt-16 lg:grid-cols-4">
          <div className="relative text-white p-10 sm:mx-0 sm:block sm:overflow-visible sm:pb-0 bg-blue-600 shadow-lg shadow-gray-900/5 rounded-3xl">
            <div className="flex items-center justify-center">
              <img
                src="https://companieslogo.com/img/orig/yahoo-finance_BIG.D-c84b9abd.png?t=1720244494"
                alt="Your Image"
                className="max-h-32 mt-20"
              />
            </div>
            
            <p className="text-center mt-10">
            With its superpowers, Finology gets you great stock reports, perfect financial recipe and action packed learning on the go.
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="border rounded-1xl p-6 shadow-lg shadow-gray-900/5 bg-white rounded-3xl">
              <div className="grid grid-cols-3 gap-5">
                <div>
                 
                  <DropdownFilter
                    id="filterOption"
                    value={formValues.filterOption}
                    options={TICKERS}
                    label="Symbol"
                    CompanyName="Company_Name"
                    onChange={handleChange}
                  />
                  {errors.filterOption && (
                    <span className="text-red-600 font-medium">
                      {errors.filterOption}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="timeframe"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Time Frame
                  </label>
                  <div className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md mt-2 px-2 py-1 shadow-sm focus:outline-none focus:border-orange-600 focus:ring-orange-600 focus:ring-1 sm:text-sm">
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-3 mr-3">
                        
                        <InputRadio
                          id="daily"
                          name="timeframe"
                          type="radio"
                          value="Daily"
                          checked={formValues.timeframe === "Daily"}
                          onChange={handleChange}
                          label="Daily"
                        />
                      </div>
                      <div className="flex items-center gap-x-3 mr-3">
                        <InputRadio
                          id="Weekly"
                          name="timeframe"
                          type="radio"
                          value="Weekly"
                          checked={formValues.timeframe === "Weekly"}
                          onChange={handleChange}
                          label="Weekly"
                        />
                      </div>
                      <div className="flex items-center gap-x-3 mr-3">
                        <InputRadio
                          id="Monthly"
                          name="timeframe"
                          type="radio"
                          value="Monthly"
                          checked={formValues.timeframe === "Monthly"}
                          onChange={handleChange}
                          label="Monthly"
                        />
                      </div>
                    </div>
                  </div>
                  {errors.timeframe && (
                    <span className="text-red-600 font-medium">
                      {errors.timeframe}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="timeframe"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Trade Status
                  </label>
                  <div className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md mt-2 px-2 py-1 shadow-sm focus:outline-none focus:border-orange-600 focus:ring-orange-600 focus:ring-1 sm:text-sm">
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-3 mr-3">
                        <InputRadio
                          id="Open"
                          name="tradestatus"
                          type="radio"
                          value="Open"
                          checked={formValues.tradestatus === "Open"}
                          onChange={handleRadioChange}
                          label="Open"
                        />
                      </div>
                      <div className="flex items-center gap-x-3 mr-3">
                        <InputRadio
                          id="Close"
                          name="tradestatus"
                          type="radio"
                          value="Close"
                          checked={formValues.tradestatus === "Close"}
                          onChange={handleRadioChange}
                          label="Close"
                        />
                      </div>
                    </div>
                  </div>
                  {errors.tradestatus && (
                    <span className="text-red-600 font-medium">
                      {errors.tradestatus}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="buydate"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Buying Date
                  </label>
                  <div className="w-full grid">
                    
                    <DatePickerUi
                      id="buydate"
                      value={formValues.buyDate}
                      onChange={handleChange}
                      onBlur={handleChange}
                      error={errors.buyDate}
                    />
                  </div>
                </div>

                <div>
                  
                  <InputJournal
                    type="text"
                    label="Buying Price"
                    id="buyprice"
                    value={formValues.buyPrice}
                    onChange={handleChange}
                    onBlur={handleChange}
                    error={errors.buyPrice}
                  />
                </div>

                <div>
                  <InputJournal
                    type="text"
                    label="Stop Loss"
                    id="stoploss"
                    value={formValues.stoploss}
                    onChange={handleChange}
                    onBlur={handleChange}
                    error={errors.stoploss}
                  />
                </div>
                <div>
                  <InputJournal
                    type="text"
                    label="Quantity"
                    id="quantity"
                    value={formValues.quantity}
                    onChange={handleChange}
                    onBlur={handleChange}
                    error={errors.quantity}
                  />
                </div>
                {formValues.tradestatus === "Close" && (
                  <>
                    <div>
                      <label
                        htmlFor="selldate"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Selling Date
                      </label>
                      <div className="w-full grid">
                        <DatePickerUi
                          id="selldate"
                          value={formValues.sellDate}
                          onChange={handleChange}
                          onBlur={handleChange}
                          error={errors.sellDate}
                        />
                      </div>
                    </div>
                    <div>
                      <InputJournal
                        type="text"
                        label="Selling Price"
                        id="sellprice"
                        value={formValues.sellPrice}
                        onChange={handleChange}
                        onBlur={handleChange}
                        error={errors.sellPrice}
                      />
                    </div>
                  </>
                )}
                <div className="col-span-full">
                  <InputJournal
                    type="text"
                    label="Reference Link"
                    id="referencelink"
                    value={formValues.referencelink}
                    onChange={handleChange}
                    onBlur={handleChange}
                    error={errors.referencelink}
                  />
                </div>
                <div className="col-span-full">
                  <InputJournal
                    type="textarea"
                    label="Strategy Used"
                    id="strategy"
                    value={formValues.strategy}
                    onChange={handleChange}
                    onBlur={handleChange}
                    error={errors.strategy}
                  />
                </div>
                <div className="col-span-full">
                  <InputJournal
                    type="textarea"
                    label="Reason For Taking The Trade"
                    id="reason"
                    value={formValues.reason}
                    onChange={handleChange}
                    onBlur={handleChange}
                    error={errors.reason}
                  />
                </div>
                {formValues.tradestatus === "Close" && (
                  <div className="col-span-full">
                    <InputJournal
                      type="textarea"
                      label="Learnings From The Trade"
                      id="notes"
                      value={formValues.notes}
                      onChange={handleChange}
                      onBlur={handleChange}
                      error={errors.notes}
                    />
                  </div>
                )}
                <div className="col-span-full">
                  <button
                    onClick={handleAddToJournal}
                    className="bg-blue-600 shadow-md text-white font-semibold text-xl px-3 py-2 rounded-md"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Journal;