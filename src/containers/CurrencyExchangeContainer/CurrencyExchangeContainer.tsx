import React from 'react';
import { connect } from 'react-redux';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import { IGlobalState } from '../../redux/state';
import { CurrencyState } from '../../redux/currencyReducer';
import { compose } from 'redux';
import {
    ChangeActionAC,
    ChangeCurrencyFieldAC,
    changeCurrentCurrencyAC,
    useDispatch
} from '../../redux/actions';

const CurrencyEContainer: React.FunctionComponent<CurrencyState> = ({ currencies, currentCurrency, isBuying, amountOfBYN,  amountOfCurrency}) => {

    const dispatch = useDispatch(); //теперь мы присваиваем наш типизированный самонаписанный юзДиспатч - вуаля! В АС-файле мы  добавили свою функции юзДиспатча и ее сюда импортируем.
    let currencyRate: number = 0;

    const currenciesName = currencies.map((currency) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    dispatch(ChangeCurrencyFieldAC(value, value));
                } else {
                    dispatch(ChangeCurrencyFieldAC(value, (+(Number(value).toFixed(2)) / currencyRate).toFixed(2)));
                }
            } else {
                if (value === '') {
                    dispatch(ChangeCurrencyFieldAC(value, value));
                } else {
                    dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
                }
            }
        }
    };

    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy' ? dispatch(ChangeActionAC(true)) : dispatch(ChangeActionAC(false));
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && dispatch(changeCurrentCurrencyAC(e.currentTarget.dataset.currency));
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};

const mapStateToProps = (state: IGlobalState) => {
    return {
        currencies: state.currency.currencies,
        currentCurrency: state.currency.currentCurrency,
        isBuying: state.currency.isBuying,
        amountOfBYN: state.currency.amountOfBYN,
        amountOfCurrency: state.currency.amountOfCurrency,
    };
};

export const CurrencyExchangeContainer = compose(
    connect(mapStateToProps, {}))(CurrencyEContainer);
