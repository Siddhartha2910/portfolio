import styled from "styled-components";

const ButtonX = ({
    label = "Button",
    onClick,
    as = "button",
    href,
    icon: Icon,
    target,
    rel,
    size = "md"   // 👈 ADD THIS
}) => {
  return (
    <StyledWrapper $size={size}>
      {as === "a" ? (
        <a
          href={href}
          target={target}
          rel={rel}
          download={!target ? true : undefined}
        >

          <span>{label}</span>
          {Icon && <Icon size={18} />}
        </a>
      ) : (
        <button onClick={onClick}>
          <span>{label}</span>
          {Icon && <Icon size={18} />}
        </button>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  a,
  button {
    height: ${({ $size }) => ($size === "sm" ? "32px" : "50px")};
    padding: 0 ${({ $size }) => ($size === "sm" ? "14px" : "24px")};
    min-width: ${({ $size }) => ($size === "sm" ? "auto" : "180px")};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ $size }) => ($size === "sm" ? "6px" : "10px")};
    cursor: pointer;
    font-family: Consolas, "Courier New", monospace;
    font-size: ${({ $size }) => ($size === "sm" ? "12px" : "15px")};
    border-radius: 6px;
    transition: 250ms ease;
    text-decoration: none;

    /* 👇 Different styles based on size */
    background: ${({ $size }) =>
      $size === "sm"
        ? "#1f1f1f"
        : "linear-gradient(145deg, #2e2d2d, #212121)"};

    border: 1px solid
      ${({ $size }) => ($size === "sm" ? "#333" : "#404c5d")};

    color: ${({ $size }) =>
      $size === "sm" ? "#cfcfcf" : "rgb(210, 210, 210)"};

    box-shadow: ${({ $size }) =>
      $size === "sm"
        ? "0 2px 6px rgba(0,0,0,0.4)"
        : `-1px -5px 15px #41465b,
           5px 5px 15px #41465b,
           inset 5px 5px 10px #212121,
           inset -5px -5px 10px #212121`};
  }

  a:hover,
  button:hover {
    color: #ffffff;

    box-shadow: ${({ $size }) =>
      $size === "sm"
        ? "0 4px 10px rgba(0,0,0,0.5)"
        : `10px 10px 13px #20232e,
           -5px -5px 13px #545b78`};

    background: ${({ $size }) =>
      $size === "sm" ? "#2a2a2a" : undefined};
  }

  svg {
    stroke-width: 2;
  }
`;



export default ButtonX;
