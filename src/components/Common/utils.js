export const getCurrencyValue = function(
  value,
  minFractionDigits,
  maxFractionDigits
) {
  let currency = "RUB";
  let formatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits
  });

  return formatter.format(value);
};

export const getFormatNumber = function(
  value,
  minFractionDigits,
  maxFractionDigits
) {
  let formatter = new Intl.NumberFormat("ru", {
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits
  });

  return formatter.format(value);
};

export const getCurrencySymbol = currency => {
  let formatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  let currency_value = formatter.format(0);
  let symbol = currency_value.replace(/0/, "");
  return symbol;
};

export const closestPolyfill = () => {
  if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector;
  if (!Element.prototype.closest)
    Element.prototype.closest = function(selector) {
      var el = this;
      while (el) {
        if (el.matches(selector)) {
          return el;
        }
        el = el.parentElement;
      }
    };
};
