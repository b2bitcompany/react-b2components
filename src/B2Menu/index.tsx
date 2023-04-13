import React, {
  FC,
  useState,
  useRef,
  useCallback,
  useEffect,
  ReactNode,
} from 'react';

import { MenuContainer, MenuItem } from './styles';

interface IB2Menu {
  isShowing: boolean;
  onHide: () => void;
  anchor: HTMLElement | null;
  offset?: number;
  children: ReactNode | Array<ReactNode>;
  className?: string;
}

type ScrollElement = HTMLElement | null | (Window & typeof globalThis);

const B2Menu: FC<IB2Menu> = ({
  isShowing,
  onHide,
  anchor,
  offset = 2,
  children,
  className,
}) => {
  const [position, setPosition] = useState<DOMRect>();
  const [scrollParent, setScrollParent] = useState<ScrollElement>(null);

  const menuRef = useRef<HTMLUListElement>(null);

  const getScrollParent = useCallback(
    (node: HTMLElement | null): ScrollElement => {
      if (node == null) {
        return null;
      }

      if (node.scrollHeight > node.clientHeight) {
        if (node === document.documentElement) {
          return window;
        }

        return node;
      } else {
        return getScrollParent(node.parentElement);
      }
    },
    []
  );

  const hide = useCallback(
    (event: Event) => {
      const node = menuRef.current;
      if (
        node &&
        event.target !== node &&
        !node.contains(event.target as HTMLElement) &&
        event.target !== anchor
      ) {
        onHide();
      }
    },
    [anchor, onHide]
  );

  const updatePosition = useCallback(() => {
    if (anchor) {
      setPosition(anchor.getBoundingClientRect());
    } else {
      setPosition(undefined);
    }
  }, [anchor]);

  useEffect(() => {
    updatePosition();
  }, [anchor, updatePosition]);

  useEffect(() => {
    window.addEventListener('resize', updatePosition);

    return () => window.removeEventListener('resize', updatePosition);
  }, [updatePosition]);

  useEffect(() => {
    if (scrollParent) {
      scrollParent.addEventListener('scroll', updatePosition);

      return () => scrollParent.removeEventListener('scroll', updatePosition);
    }

    return undefined;
  }, [scrollParent, updatePosition]);

  useEffect(() => {
    if (isShowing) {
      document.addEventListener('click', hide);
    }

    return () => document.removeEventListener('click', hide);
  }, [hide, isShowing]);

  useEffect(() => {
    if (!scrollParent) {
      const newScrollParent = getScrollParent(anchor);
      setScrollParent(newScrollParent);
    }
  }, [anchor, getScrollParent, scrollParent]);

  return (
    <>
      {position && isShowing && anchor ? (
        <MenuContainer
          className={className}
          style={{
            minWidth: position.width,
            left: position.x,
            top: position.y + position.height + offset,
          }}
          ref={menuRef}
        >
          {children}
        </MenuContainer>
      ) : null}
    </>
  );
};

export { B2Menu, MenuItem as B2MenuItem };
