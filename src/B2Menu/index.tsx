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

const B2Menu: FC<IB2Menu> = ({
  isShowing,
  onHide,
  anchor,
  offset = 2,
  children,
  className,
}) => {
  const [position, setPosition] = useState<DOMRect>();
  const [scrollParent, setScrollParent] = useState<HTMLElement | null>(null);

  const menuRef = useRef<HTMLUListElement>(null);

  const getScrollParent = useCallback(
    (node: HTMLElement | null): HTMLElement | null => {
      if (node == null) {
        return null;
      }

      if (node.scrollHeight > node.clientHeight) {
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

      if (!scrollParent) {
        const newScrollParent = getScrollParent(anchor);
        setScrollParent(newScrollParent);
      }
    }

    return () => document.removeEventListener('click', hide);
  }, [anchor, getScrollParent, hide, isShowing, scrollParent]);

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

export { IB2Menu, B2Menu, MenuItem as B2MenuItem };
