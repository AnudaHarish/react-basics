import { it, expect, vi, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { formatMoney } from "../../utils/formatMoney";
import { Product } from "./Product";


vi.mock("axios");

describe("product component", () => {
  it("Display items in the Product component", () => {
    const product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    };

    const loadCart = vi.fn();

    render(<Product product={product} loadCart={loadCart} />);

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      product.image,
    );
    expect(formatMoney(product.priceCents)).toBe("$10.90");
  });

  it("Check the functionality of the add cart button", async () => {
    const product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    };

    const loadCart = vi.fn();

    render(<Product product={product} loadCart={loadCart} />);
    const user = userEvent.setup();
    const addToCartBtn = screen.getByTestId("add-to-cart-btn");
    await user.click(addToCartBtn);

    expect(axios.post).toHaveBeenCalledWith(
      '/api/cart-items',
      {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1
      }
    );

    expect(loadCart).toHaveBeenCalled();

  })
});
