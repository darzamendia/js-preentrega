class KbSwitch {
    constructor(
        name,
        type,
        topHousing,
        bottomHousing,
        stem,
        spring,
        factoryLubed,
        rating,
        review,
        image,
        id,
        unitPrice,
        btnId,
        btnDelId
    ) {
        this.name = name;
        this.type = type;
        this.topHousing = topHousing;
        this.bottomHousing = bottomHousing;
        this.stem = stem;
        this.spring = spring;
        this.factoryLubed = factoryLubed;
        this.review = review;
        this.rating = parseInt(rating);
        this.id = parseInt(id);
        this.unitPrice = parseFloat(unitPrice);
        this.image = image;
        this.btnId = btnId;
        this.btnDelId = btnDelId;
    }
    assignId(array) {
        this.id = newId(array);
        this.btnId = `btnDetail${this.id}`;
        this.btnDelId = `btnDelete${this.id}`;
    }
    addReview(review) {
        this.review = review;
    }
    addRating() {
        this.rating = rating;
    }

    assignImage(url) {
        if (url == "") {
            this.image = "./img/no-image-svgrepo-com.svg";
        } else {
            this.image = url;
        }
    }
}

class KbSwitchUnit {
    constructor(
        name,
        type,
        topHousing,
        bottomHousing,
        stem,
        spring,
        factoryLubed,
        unitPrice,
        unitStock,
        rating,
        review,
        image,
        id,
        btnDetail,
        btnAddCart
    ) {
        this.name = name;
        this.type = type;
        this.topHousing = topHousing;
        this.bottomHousing = bottomHousing;
        this.stem = stem;
        this.spring = spring;
        this.factoryLubed = factoryLubed;
        this.unitPrice = parseFloat(unitPrice);
        this.unitStock = parseInt(unitStock);
        this.review = review;
        this.rating = parseInt(rating);
        this.id = parseInt(id);
        this.image = image;
        this.btnDetail = btnDetail;
        this.btnAddCart = btnAddCart;
    }
    assignId(array) {
        this.id = newId(array);
        this.btnDetail = `btnDetail${this.id}`;
        this.btnAddCart = `btnAddCart${this.id}`;
    }
    addReview(review) {
        this.review = review;
    }
    addRating() {
        this.rating = rating;
    }

    assignImage(url) {
        if (url == "") {
            this.image = "./img/no-image-svgrepo-com.svg";
        } else {
            this.image = url;
        }
    }
}

class KbSwitchUnitCart {
    constructor(
        name,
        type,
        topHousing,
        bottomHousing,
        stem,
        spring,
        factoryLubed,
        unitPrice,
        quantity,
        rating,
        review,
        image,
        id,
        totalPrice,
        idDelete
    ) {
        this.name = name;
        this.type = type;
        this.topHousing = topHousing;
        this.bottomHousing = bottomHousing;
        this.stem = stem;
        this.spring = spring;
        this.factoryLubed = factoryLubed;
        this.unitPrice = parseFloat(unitPrice);
        this.quantity = parseInt(quantity);
        this.review = review;
        this.rating = parseInt(rating);
        this.id = parseInt(id);
        this.image = image;
        // this.btnDetail = btnDetail;
        // this.btnAddCart = btnAddCart;
        this.totalPrice = totalPrice;
        this.idDelete = idDelete;
    }
    assignId() {
        //     this.id = newId(array);
        this.idDelete = `btnDelete${this.id}`;
        //     this.btnDelId = `btnDelete${this.id}`;
    }
    // addReview(review) {
    //     this.review = review;
    // }
    // addRating() {
    //     this.rating = rating;
    // }
    calcTotal() {
        this.totalPrice = this.unitPrice * this.quantity;
    }

    assignImage(url) {
        if (url == "") {
            this.image = "./img/no-image-svgrepo-com.svg";
        } else {
            this.image = url;
        }
    }
}

class NewLogo {
    constructor(id, name, url) {
        this.id = parseInt(id);
        this.name = name;
        this.url = url;
    }
}
