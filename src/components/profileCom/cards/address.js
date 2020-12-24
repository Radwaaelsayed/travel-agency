const Address = () => {
    return (
        <div className="pl-lg-4">
            {/* <!-- Address --> */}
            <div className="pl-lg-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-address">Address</label>
                            <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-city">City</label>
                            <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value="New York" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-country">Country</label>
                            <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value="United States" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="input-country">Postal code</label>
                            <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code" />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-4" />
        </div>
    )
}

export default Address;