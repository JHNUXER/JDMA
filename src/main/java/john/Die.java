package john;

public class Die {
  public ArrayList<Integer> integers = new ArrayList<Integer>();
  private int sides;
  private int index = 0;

  public int countSides() {return sides;}

  public void fShuffle() {
    for (int i = 0; i < countSides(); i++) {
      integers.add(i);
    }
    shuffle();
  }
  public void shuffle() {
    Collections.shuffle(integers);
    index = 0;
  }
  
  public Die(int n) {
    this.sides = n;
    fShuffle();
  }
  
  public int roll() {
    return integers.get(index++);
    if (index >= integers.size()) shuffle();
  }
  
  // public static int roll(String string)
}
