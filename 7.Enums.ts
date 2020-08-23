
enums();

function enums() {
    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }

    console.log(Direction.Up);
    let value = Direction.Up;
    console.log(Direction[value]);

    enum DirectionWithOutInit {
        Up,
        Down,
        Left,
        Right
    }

    console.log(DirectionWithOutInit.Up);

    enum DirectionStringEnum {
        Up = 'U',
        Down = 'D',
        Left = 'L',
        Right = 'R'
    }

    console.log(DirectionStringEnum.Left);

    enum HetrogenousEnum {
        no = 0,
        yes = 'Y'
    };

    console.log(HetrogenousEnum.no)
    console.log(HetrogenousEnum.yes)

    enum FileAccess {
        // constant members
        None,
        Read = 1 << 1,
        Write = 1 << 2,
        ReadWrite = Read | Write,
        // computed member
        G = "123".length
    }

    console.log(FileAccess.ReadWrite);
    console.log(FileAccess.Read);

    enum Enum1 {
        A = 1,
        B,
        C = 2
    }

    console.log('----------');
    console.log(Enum1.A);
    console.log(Enum1.B);
    console.log(Enum1.C);
}
