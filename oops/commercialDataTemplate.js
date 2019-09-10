/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   commercial data/stock management utility file
 * 
 * @description
 * 
 * @file        :   commercialDataTemplate.js
 * @overview    :   commercial data/stock management utility file
 * @module      :   stock,customer,transcation 
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   09-09-2019
*******************************************************************************/

var fs = require('fs');;
class CommercialData {
    input() {
        var readline = require('readline-sync');
        var value = readline.question();
        return value;
    }
    fileRead(fileName) {
        var data = fs.readFileSync(fileName);
        return data;
    }

    fileSave(fileName, data) {
        fs.writeFileSync(fileName, data)
        console.log("FILE UPDATED");
    }

    transaction(name, sname, price, numOfShares, status) {
        return {
            customerName: name,
            stockName: sname,
            priceOfStock: price,
            numberOfShares: numOfShares,
            status: status
        }
    }
    customer(custName, custShare, custNoShare) {
        return {
            customerName: custName,
            details:
                [{
                    stockName: custShare,
                    numberOfShares: custNoShare
                }]
        }
    }
    addStock(custShare, custNoShare) {
        return {
            stockName: custShare,
            numberOfShares: custNoShare

        }
    }

    stockAvailability(comp, noStocks) {
        let stockInfo = this.fileRead('stock.json')
        stockInfo = JSON.parse(stockInfo);
        for (var i = 0; i < stockInfo.length; i++) {
            if (stockInfo[i].shareName == comp) {
                if (stockInfo[i].nShares >= noStocks) {
                    var price = stockInfo[i].sharePrice;
                    return price;
                }
            }
        }
        return false;
    }

    getIndexOfStock(comp) {
        let stockInfo = this.fileRead('stock.json')
        stockInfo = JSON.parse(stockInfo);
        for (var i = 0; i < stockInfo.length; i++) {
            if (stockInfo[i].shareName == comp) {
                return i;
            }
        }
        return false;
    }
    getIndexOfDetail(comp, name) {
        let customerInfo = this.fileRead('customer.json')
        customerInfo = JSON.parse(customerInfo);
        var sc = this.searchCustomer(name);
        for (var j = 0; j < customerInfo[sc].details.length; j++) {
            if (customerInfo[sc].details[j].stock == comp) {
                return j;
            }
        }
        return false;
    }

    searchCustomer(name) {
        let customerInfo = this.fileRead('customer.json')
        customerInfo = JSON.parse(customerInfo);
        for (var i = 0; i < customerInfo.length; i++) {
            if (customerInfo[i].custName == name) {
                return i;
            }
        }
        return false;

    }



    customerData() {
        try {
            let customerInfo = this.fileRead('customer.json')
            customerInfo = JSON.parse(customerInfo)
            console.log("Enter customer name: ");
            var custName = this.input();
            console.log("Enter the share name: ");
            var custShare = this.input();
            console.log("Enter the no of shares: ");
            var custNoShare = parseInt(this.input());
            if (isNaN(custNoShare)) throw 'input no of shares must be a number'

            var input = this.customer(custName, custShare, custNoShare);
            customerInfo.push(input);
            var cInfo = JSON.stringify(customerInfo);
            this.fileSave('customer.json', cInfo);
        }
        catch (err) {
            console.log(err);
            this.customerData();
        }
    }

    /*
    sellStock(){
        let stockInfo = this.fileRead('stock.json')    
        stockInfo = JSON.parse(stockInfo)
        let customerInfo = this.fileRead('customer.json')
        customerInfo = JSON.parse(customerInfo)
        let transInfo = this.fileRead('transaction.json')
        transInfo = JSON.parse(transInfo)
        console.log('enter customer who wants to sell stock :')
        var name = this.input();
        console.log('enter the company you wish to sell stock from:')
        var comp = this.input();
        console.log('enter how many  stock you want to sell:')
        var noStocks = this.input();
        var check = this.stockAvailability(comp, noStocks);
        console.log(check)
        var index = this.getIndexOfStock(comp);
        console.log(index)
        var inputNameIndex = this.searchCustomer(name);
        if (check) {
            var input = this.transaction(name, comp, check, noStocks, 'sell');
            transInfo.push(input);
            stockInfo[index].nShares = stockInfo[index].nShares - noStocks;
            var tinfo = JSON.stringify(transInfo);
            this.fileSave('transaction.json', tinfo);
            var sinfo = JSON.stringify(stockInfo);
            this.fileSave('stock.json', sinfo);
            if (inputNameIndex) {
                var detailsIndex = this.getIndexOfDetail(comp, name);
                if (detailsIndex) {
                    customerInfo[inputNameIndex].details[detailsIndex].share = parseInt(customerInfo[inputNameIndex].details[detailsIndex].share) - parseInt(noStocks);
                    var cInfo = JSON.stringify(customerInfo);
                    this.fileSave('customer.json', cInfo);
                }
                else {
                    var input = this.addStock(comp, noStocks)
                    customerInfo[inputNameIndex].details.push(input);
                    var cInfo = JSON.stringify(customerInfo);
                    this.fileSave('customer.json', cInfo)
                }
            }
            else {
                var input = this.customer(name, comp, noStocks);
                customerInfo.push(input);
                var cInfo = JSON.stringify(customerInfo);
                this.fileSave('customer.json', cInfo);
            }
        }
        else {
            console.log('This stock is not available');
        }
    }
*/



    buyStock() {
        try {
            let stockInfo = this.fileRead('stock.json')
            stockInfo = JSON.parse(stockInfo)
            let customerInfo = this.fileRead('customer.json')
            customerInfo = JSON.parse(customerInfo)
            let transInfo = this.fileRead('transaction.json')
            transInfo = JSON.parse(transInfo)
            console.log('enter customer who wants to buy stock :')
            var name = this.input();
            console.log('enter the company you wish to buy stock from:')
            var comp = this.input();
            console.log('enter how many  stock you want to buy:')
            var noStocks = this.input();
            if (isNaN(noStocks)) throw " no of stocks must be a number"
            var check = this.stockAvailability(comp, noStocks);
            var index = this.getIndexOfStock(comp);
            var inputNameIndex = this.searchCustomer(name);
            if (check) {
                var input = this.transaction(name, comp, check, noStocks, 'buy');
                transInfo.push(input);
                stockInfo[index].nShares = stockInfo[index].nShares - noStocks;
                var tinfo = JSON.stringify(transInfo);
                this.fileSave('transaction.json', tinfo);
                var sinfo = JSON.stringify(stockInfo);
                this.fileSave('stock.json', sinfo);
                if (inputNameIndex) {
                    var detailsIndex = this.getIndexOfDetail(comp, name);
                    if (detailsIndex) {
                        customerInfo[inputNameIndex].details[detailsIndex].share = parseInt(customerInfo[inputNameIndex].details[detailsIndex].share) + parseInt(noStocks);
                        var cInfo = JSON.stringify(customerInfo);
                        this.fileSave('customer.json', cInfo);
                    }
                    else {
                        var input = this.addStock(comp, noStocks)
                        customerInfo[inputNameIndex].details.push(input);
                        var cInfo = JSON.stringify(customerInfo);
                        this.fileSave('customer.json', cInfo)
                    }
                }
                else {
                    var input = this.customer(name, comp, noStocks);
                    customerInfo.push(input);
                    var cInfo = JSON.stringify(customerInfo);
                    this.fileSave('customer.json', cInfo);
                }
            }
            else {
                console.log('This stock is not available');
            }
        }

        catch (err) {
            console.log(err);
            this.buyStock();
        }
    }
}

module.exports = CommercialData;

//var cd = new CommercialData;
//cd.customerData();
